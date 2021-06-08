import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { resourceLimits } from 'worker_threads';
import { AutenticacionService } from '../login/autenticacion.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css'],
})
export class MerchComponent implements OnInit {
  data: any;
  id: any;
  deseados: any;
  cesta: any;
  enDeseado: boolean = false;
  enCesta: boolean = false;
  idUser: any;
  idEnDeseados: any;
  idEnCesta: any;
  constructor(
    private http: HttpClient,
    private autenticacionServe: AutenticacionService,
    private _ac: ActivatedRoute,
    private dialog: MatDialog,

  ) {}

  ngOnInit(): void {
    this.obtenerID();
    this.obtenerArticulo();
    this.idUser = this.autenticacionServe.getIdUser();
    this.obtenerCarrito(this.idUser);
    this.obtenerDeseados(this.idUser);

  }

  obtenerArticulo() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos/' + this.id)
      .toPromise()
      .then((result) => {
        console.log(result);
        this.asignarArticulos(result);
      });
  }

  asignarArticulos(dato: any) {
    this.data = dato.data;
    console.log(this.data);
  }

  obtenerID() {
    this._ac.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.id = id;
    });
  }

  obtenerDeseados(user: any) {
    console.log(user.id);
    this.http
      .get('http://127.0.0.1:8000/api/deseados/usuario/' + user.id)
      .subscribe((result) => {
        this.deseados = result;
        console.log(this.deseados);
        this.comprobarDeseados(this.deseados);
      });
  }
  comprobarDeseados(deseados: any) {
    for (var i = 0; i < deseados.length; i++) {
      if (deseados[i].id_articulo == this.id) {
        console.log(this.cesta[i].id);
        this.idEnDeseados = this.deseados[i].id;
        console.log('coinciden');
        this.enDeseado = true;
      }
    }
  }

  obtenerCarrito(user: any) {
    console.log(user.id);
    this.http
      .get('http://127.0.0.1:8000/api/carrito/usuario/' + user.id)
      .subscribe((result) => {
        this.cesta = result;
        this.comprobarCarrito(this.cesta);
      });
  }
  comprobarCarrito(cesta: any) {
    for (var i = 0; i < cesta.length; i++) {
      if (cesta[i].id_articulo == this.id) {
        console.log(this.cesta[i].id);
        this.idEnCesta = this.cesta[i].id;
        console.log('coinciden');
        this.enCesta = true;
      }
    }
  }

  anadirCesta() {
    if (this.idUser != '') {
      if (this.enCesta == true) {
        this.enCesta = false;
        this.borrarBBDD();
      } else if (this.enCesta == false) {
        this.enCesta = true;
        console.log(this.enCesta);

        this.añadirBBDD();
      }
    } else {
      this.enCesta = false;
      this.onCreate();
    }
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(LoginComponent, { panelClass: 'custom-dialog-container' });
    this.dialog.afterAllClosed.subscribe((result) => {
      window.location.reload()
    });
  }
  
  añadirBBDD(){
    console.log(this.idUser)
    console.log(this.id)
    this.http.post("http://127.0.0.1:8000/api/carrito",{
      id_usuario: this.idUser.id,
      id_articulo: this.id,
      cantidad: 1
  }).toPromise().then((data:any) => {
    console.log(data)
    console.log(JSON.stringify(data.JSON))
    this.obtenerCarrito(this.idUser);
  })
  }

  borrarBBDD(){
    this.http.delete("http://127.0.0.1:8000/api/carrito/"+ this.idEnCesta).subscribe({
      next: data => {
         console.log("funciona")
      }
     
  });
}

anadirDeseados(){
  console.log(this.deseados)
  if(this.idUser != ""){
    if(this.enDeseado == true){
    this.enDeseado = false;
    this.borrarDeseadosBBDD()
    }else if(this.enDeseado == false){
      this.enDeseado = true;
      console.log(this.enDeseado)
      
      this.añadirDeseadosBBDD()
    }
  }else{
    this.enDeseado = false;
    this.onCreate()
  }
}

borrarDeseadosBBDD(){
  console.log(this.idEnDeseados)
  this.http.delete("http://127.0.0.1:8000/api/deseados/"+ this.idEnDeseados).subscribe({
    next: data => {
       console.log("funciona")
    }
  });
}
añadirDeseadosBBDD(){
  console.log(this.id)
  this.http.post("http://127.0.0.1:8000/api/deseados",{
    id_usuario: this.idUser.id,
    id_articulo: this.id,
    
}).toPromise().then((data:any) => {
  console.log(data)
  console.log(JSON.stringify(data.JSON))
  this.obtenerDeseados(this.idUser);
})
}
}
