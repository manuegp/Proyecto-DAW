import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModificarProductoComponent } from '../modificar-producto/modificar-producto.component';

@Component({
  selector: 'app-modificar-juego',
  templateUrl: './modificar-juego.component.html',
  styleUrls: ['./modificar-juego.component.css'],
})
export class ModificarJuegoComponent implements OnInit {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  signupForm: FormGroup; //Formulario
  idCrear: any; //Id del nuevo articulo que se ha creado 
  idJuego: any;
  idRequisitosJuego: any;

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private _builder: FormBuilder,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any, //Se injectan los datos del componente padre
    //Hay un dato llamado tipo que indicara si hay que actualizar el producto o crear un nuevo
    private dialogRef: MatDialogRef<ModificarJuegoComponent>
  ) {
    //Asigno los datos injectados a los inputs en caso que se quiera modificar un juego
    this.signupForm = this._builder.group({
      nombre: [data.nombre, Validators.required],
      descripcion: [data.descripcion, Validators.required],
      precio: [data.precio, Validators.required],
      fecha_salida: [data.fecha_salida, Validators.required],
      imagen: [data.imagen, Validators.required],
      directx: [data.directx, Validators.required],
      etiquetas: [data.etiquetas, Validators.required],
      graficos: [data.graficos, Validators.required],
      idioma: [data.idioma, Validators.required],
      memoria: [data.memoria, Validators.required],
      os: [data.os, Validators.required],
      plataforma: [data.plataforma, Validators.required],
      storage: [data.storage, Validators.required],
      procesador: [data.procesador, Validators.required],
      tarjeta_sonido: [data.tarjeta_sonido, Validators.required],
      video: [data.video, Validators.required],
    });
  }

  ngOnInit(): void { }
  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  submit() {
    console.log("aaaaaaa");
    //Recojo los datos y los envio
    this.enviarDatos(
      this.data.tipo,
      this.data.id,
      this.signupForm.controls['nombre'].value,
      this.signupForm.controls['descripcion'].value,
      this.signupForm.controls['precio'].value,
      this.signupForm.controls['fecha_salida'].value,
      this.signupForm.controls['imagen'].value,
      this.signupForm.controls['directx'].value,
      this.signupForm.controls['etiquetas'].value,
      this.signupForm.controls['graficos'].value,
      this.signupForm.controls['idioma'].value,
      this.signupForm.controls['memoria'].value,
      this.signupForm.controls['os'].value,
      this.signupForm.controls['plataforma'].value,
      this.signupForm.controls['storage'].value,
      this.signupForm.controls['procesador'].value,
      this.signupForm.controls['tarjeta_sonido'].value,
      this.signupForm.controls['video'].value
    );
  }

  cancelar() {
    this.dialogRef.close();
  }

  async enviarDatos(
    tipo: string,
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    fecha: string,
    imagen: string,
    directx: string,
    etiquetas: string,
    graficos: string,
    idioma: string,
    memoria: string,
    os: string,
    plataforma: string,
    storage: string,
    procesador: string,
    tarjeta_sonido: string,
    video: any
  ) {
    if (tipo == 'update') {
      //Compruebo si se va a crear o actualizar el dato
      console.log("actualizar");
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

          this.http
            .get('http://127.0.0.1:8000/api/juegos/id/' + id)
            .subscribe((result) => {

              this.idJuego = result;

              this.http
                .put('http://127.0.0.1:8000/api/juegos/' + this.idJuego[0].id, {
                  etiquetas: etiquetas,
                  idioma: idioma,
                  video: video,
                  plataforma: plataforma,
                })
                .toPromise()
                .then((data: any) => {

                  this.http
                    .get('http://127.0.0.1:8000/api/requisitos_juego/id/' + id)
                    .subscribe((result) => {
                      this.idRequisitosJuego = result;

                      this.http
                        .put('http://127.0.0.1:8000/api/requisitos_juego/' + this.idRequisitosJuego[0].id, {
                          directx: directx,
                          graficos: graficos,
                          memoria: memoria,
                          os: os,
                          storage: storage,
                          procesador: procesador,
                          tarjeta_sonido: tarjeta_sonido,
                        })
                        .toPromise()
                        .then((data: any) => {
                          this.dialogRef.close();
                        });


                    });


                });


            });

        });

    } else if (tipo == 'add') {
      this.http
        .post('http://127.0.0.1:8000/api/articulos', {
          //Añado primero a la tabla articulos
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          fecha_salida: fecha,
          imagen_principal: imagen,
        })
        .toPromise()
        .then((data: any) => {
          this.idCrear = data.data.id;
          this.dialogRef.close();
          this.http
            .post('http://127.0.0.1:8000/api/juegos', {
              //Añado luego a la tabla juegos
              id_articulo: this.idCrear,
              etiquetas: etiquetas,
              idioma: idioma,
              video: video,
              plataforma: plataforma,
            })
            .toPromise()
            .then((data: any) => {
              this.idCrear = data.data.id;
              this.http
                .post('http://127.0.0.1:8000/api/requisitos_juego', {
                  //Añado a la tabla requisitos_juegos
                  id_juego: this.idCrear,
                  directx: directx,
                  graficos: graficos,
                  memoria: memoria,
                  os: os,
                  storage: storage,
                  procesador: procesador,
                  tarjeta_sonido: tarjeta_sonido,
                })
                .toPromise()
                .then((data: any) => {
                  window.location.reload();
                });
            });

          this.http
            .post('http://127.0.0.1:8000/api/ofertas', {
              //Y por ultimo creo una oferta con porcentaje 0
              id_articulo: this.idCrear,
              porcentaje: 0,
            })
            .toPromise()
            .then((data: any) => {
              this.dialogRef.close();
            });
        });

    }
  }
}
