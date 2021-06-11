import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

import { Inject } from '@angular/core';
@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css'],
})
export class ModificarProductoComponent {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  signupForm: FormGroup; //Formulario
  idCrear: any; //Id del producto creado

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private _builder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //Se injectan los datos del componente padre
    //Hay un dato llamado tipo que indicara si hay que actualizar el producto o crear un nuevo
    private dialogRef: MatDialogRef<ModificarProductoComponent>
  ) {
    //Asigno los datos injectados a los inputs en caso que se quiera modificar un juego
    this.signupForm = this._builder.group({
      nombre: [data.nombre, Validators.required],
      descripcion: [data.descripcion, Validators.required],
      precio: [data.precio, Validators.required],
      fecha_salida: [data.fecha_salida, Validators.required],
      imagen: [data.imagen, Validators.required],
    });
  }

  ngOnInit(): void {}

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  submit() {
    //Se recogen los datos y se envian
    this.enviarDatos(
      this.data.tipo,
      this.data.id,
      this.signupForm.controls['nombre'].value,
      this.signupForm.controls['descripcion'].value,
      this.signupForm.controls['precio'].value,
      this.signupForm.controls['fecha_salida'].value,
      this.signupForm.controls['imagen'].value
    );
  }

  cancelar() {
    this.dialogRef.close();
  }

  urlAdd = 'http://127.0.0.1:8000/api/articulos'; //Url de la tabla articulos

  enviarDatos(
    tipo: string,
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    fecha: string,
    imagen: File
  ) {
    if (tipo == 'update') {
      //Se actualiza el articulo
      this.http
        .put('http://127.0.0.1:8000/api/articulos/' + id, {
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          fecha_salida: fecha,
          imagen_principal: imagen,
        })
        .toPromise()
        .then((data: any) => {
          this.dialogRef.close(); //Cierro el dialogo
        });
    } else if (tipo == 'add') {
      //Se añade un nuevo articulo
      this.http
        .post(this.urlAdd, {
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          fecha_salida: fecha,
          imagen_principal: imagen,
        })
        .toPromise()
        .then((data: any) => {
          this.idCrear = data.data.id;

          this.http
            .post('http://127.0.0.1:8000/api/ofertas', {
              //Creo su oferta
              id_articulo: this.idCrear,
              porcentaje: 0,
            })
            .toPromise()
            .then((data: any) => {
              this.dialogRef.close(); //Cierro el dialogo
            });
        });
    }
  }
}
