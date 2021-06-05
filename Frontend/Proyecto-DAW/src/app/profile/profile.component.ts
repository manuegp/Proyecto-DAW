import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AutenticacionService } from '../login/autenticacion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  userData: any;
  signupForm: FormGroup;
  asignar: any;
  historialSource: any;
  deseadoSource: any;
  
  constructor(
    private autenticacionServe: AutenticacionService,
    private http: HttpClient,
    private _builder: FormBuilder,
    private router: Router,

  ) {
    this.esperarConstruccion();
    console.log(this.userData);

    this.signupForm = this._builder.group({
      username: [],
      nombre: [],
      apellidos: [],
      email: [],
      telefono: [],
    });
  }

  esperarConstruccion() {
    console.log('Entered second function');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('\t\t This is second promise');
        this.construir();
      }, 1000);
    });
  }

  construir() {
    this.signupForm = this._builder.group({
      username: [this.userData.data.nick, Validators.required],
      nombre: [this.userData.data.nombre, Validators.required],
      apellidos: [this.userData.data.apellidos, Validators.required],
      email: [this.userData.data.email, Validators.required],
      telefono: [this.userData.data.telefono, Validators.required],
    });
  }
  ngOnInit(): void {
    this.asignarDatos();
    this.asignarHistorial();
    this.asignarDeseados();
    console.log(this.historialSource);
  }

  asignarDeseados(){
    this.http
    .get('http://127.0.0.1:8000/api/deseados/usuario/' + this.user.id)
    .subscribe((result) => {
      this.asignar = result;
      console.log(this.asignar);
      if(this.asignar.length  ===0 ){
        this.hayContenidoDeseados= true
      }
      this.deseadoSource = new MatTableDataSource(this.asignar);
      this.deseadoSource.paginator = this.paginator2;
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  asignarHistorial() {
    console.log(this.user.id);
    this.http
      .get('http://127.0.0.1:8000/api/ventas/usuario/' + this.user.id)
      .subscribe((result) => {
        this.asignar = result;
        console.log(this.asignar);
        if(this.asignar.length  === 0 ){
          this.hayContenidoHistorial= true
        }
        this.historialSource = new MatTableDataSource(this.asignar);
        this.historialSource.paginator = this.paginator;
      });
  }

  hayContenidoDeseados : any=  false;
  hayContenidoHistorial : any=  false;
  private async asignarDatos() {
    this.user = this.autenticacionServe.getIdUser();
    const data = await this.http
      .get('http://127.0.0.1:8000/api/usuarios/' + this.user.id)
      .toPromise();
    this.userData = data;
  }

  submit(evento: any) {
    console.log;
    this.http
      .put('http://127.0.0.1:8000/api/usuarios/' + this.user.id, {
        nombre: this.signupForm.controls['nombre'].value,
        apellido: this.signupForm.controls['apellidos'].value,
        nick: this.signupForm.controls['username'].value,
        telefono: this.signupForm.controls['telefono'].value,
        email: this.signupForm.controls['email'].value,
      })
      .toPromise()
      .then((data: any) => {
        console.log(data);
        console.log(JSON.stringify(data.JSON));
      });
  }

  displayedColumnsHistorial: string[] = [
    'Imagen',
    'Nombre',
    'Precio',
    'Cantidad',
    'Fecha',
  ];
  displayedColumnsDeseados: string[] = ['Imagen', 'Nombre', 'Precio', 'Boton'];
  
  eliminarDeseado(elemento : any){

    this.http.delete("http://127.0.0.1:8000/api/deseados/"+ elemento.id).subscribe({
      next: data => {
          console.log(elemento)
          this.borro(elemento)
      }
     
  });
    /*
      let idBorrar= this.localizarElemento(elemento);
      console.log(this.deseadoSource)
      this.deseadoSource = this.deseadoSource.splice( this.deseadoSource - 1 , idBorrar)
*/
  }

  borro(elemento:any){
    console.log(elemento);

   //Codigo actualmente no funcional
   /* let idBorrar=  this.localizarElemento(elemento)
   console.log(idBorrar)
   this.juegosCesta = this.juegosCesta.splice(idBorrar, 1)
    console.log(this.juegosCesta)
    this.calcularTotal()
     */
    window.location.reload()
    
  }

  localizarElemento(elemento:any){
    console.log(this.deseadoSource[0].id)
    for (let i = 0; i < this.deseadoSource.length; i++) {
      if(elemento.id == this.deseadoSource[i].id){
        return i;
      }
   }
   return 0
  }

  redirigir(event: any) {
    this.router.navigate(['/product/' + event.id_articulo]);
  }
}
