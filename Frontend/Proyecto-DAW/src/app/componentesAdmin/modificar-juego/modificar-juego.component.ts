import { HttpClient } from '@angular/common/http';
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
  signupForm: FormGroup;
  idCrear: any;
  idCrear2: any;
  constructor(
    private _builder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private dialogRef: MatDialogRef<ModificarJuegoComponent>
  ) {
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

  submit() {
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
          console.log(data);
          console.log(JSON.stringify(data.JSON));
        });

      this.http
        .put('http://127.0.0.1:8000/api/juegos/' + id, {
          etiquetas: etiquetas,
          idioma: idioma,
          video: video,
          plataforma: plataforma,
        })
        .toPromise()
        .then((data: any) => {
          console.log(data);
          console.log(JSON.stringify(data.JSON));
        });

      this.http
        .put('http://127.0.0.1:8000/api/requisitos_juego/' + id, {
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
          console.log(data);
          console.log(JSON.stringify(data.JSON));
          this.dialogRef.close();
        });
    } else if (tipo == 'add') {
      this.http
        .post('http://127.0.0.1:8000/api/articulos', {
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          fecha_salida: fecha,
          imagen_principal: imagen,
        })
        .toPromise()
        .then((data: any) => {
          console.log(data);
          this.idCrear = data.data.id;
          console.log(data.data.id);
          console.log(this.idCrear);
          console.log(JSON.stringify(data.JSON));
          this.dialogRef.close();
          console.log(this.idCrear);
          this.http
            .post('http://127.0.0.1:8000/api/juegos', {
              id_articulo: this.idCrear,
              etiquetas: etiquetas,
              idioma: idioma,
              video: video,
              plataforma: plataforma,
            })
            .toPromise()
            .then((data: any) => {
              console.log(data);
              console.log(JSON.stringify(data.JSON));
              this.idCrear = data.data.id
              this.http
                .post('http://127.0.0.1:8000/api/requisitos_juego', {
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
                  console.log(data);
                  console.log(JSON.stringify(data.JSON));
                });
            });

            this.http.post('http://127.0.0.1:8000/api/ofertas', {
                    id_articulo: this.idCrear,
                    porcentaje: 0,
                  }).toPromise()
                    .then((data: any) => {
                      console.log(data);
                      console.log(JSON.stringify(data.JSON));
                      this.dialogRef.close();
                    });

        });
      console.log(this.idCrear);



    }


  }
}
