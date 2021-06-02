import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AutenticacionService } from '../login/autenticacion.service';
import { createThis } from 'typescript';
import { waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  panelOpenState = false;
  data : any;
  safeUrl : any;
  videoURL : any;
  idUser: any;
  cesta: any;
  enCesta : boolean = false; 
  idEnCesta :any;
  constructor(private _ac: ActivatedRoute,
              private http: HttpClient,
              private autenticacionServe:AutenticacionService,
              private dialog: MatDialog,
              private _sanitizer: DomSanitizer) {
       

               }
  
  id :any;
 
  obtenerArticulos() {
    this.http.get('http://127.0.0.1:8000/api/articulos/'+this.id).subscribe(result => {
      this.asignarArticulos(result)
    });
  }

  asignarArticulos(dato : any){
    this.data = dato; 
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.data.data.video );
    console.log(this.safeUrl)
  }

  

  obtenerID(){
    this._ac.paramMap.subscribe(params => {
      const id = params.get('id')
      this.id = id;
      
    })
  }

  obtenerCarrito(user: any){
    console.log(user.id)
    this.http.get('http://127.0.0.1:8000/api/carrito/usuario/'+user.id).subscribe(result => {
      this.cesta = result;
      this.comprobarCarrito(this.cesta)
    });
    
  }

  comprobarCarrito(cesta:any){
      for(var i = 0; i < cesta.length; i++){
        if(cesta[i].id_articulo == this.id){
          
          console.log(this.cesta[i].id)
          this.idEnCesta = this.cesta[i].id;
          console.log("coinciden")
          this.enCesta= true;
        }
      }
  }


  ngOnInit(): void {
    this.obtenerID();
    this.obtenerArticulos();
    this.idUser= this.autenticacionServe.getIdUser()
    this.obtenerCarrito(this.idUser);
    //this.comprobarCarrito(this.cesta)
    console.log(this.cesta)
    console.log(this.data);
    console.log(this.id)
  }

  ngAfterViewInit(): void {
    
  }



  anadirCesta(){
    if(this.idUser != ""){
    if(this.enCesta == true){
    this.enCesta = false;
    this.borrarBBDD()
    }else if(this.enCesta == false){
      this.enCesta = true;
      console.log(this.enCesta)
      
      this.añadirBBDD()
    }
  }else{
    this.enCesta = false;
    this.onCreate()
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
  
}
