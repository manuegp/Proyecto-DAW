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
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  user: any; //info del usuario
  userData: any; //info del usuario en el formulario
  signupForm: FormGroup; //formulario
  asignar: any; //variable para asignar info del usuario
  historialSource: any; //Datos para la tabla historial
  deseadoSource: any; //Datos para la tabla deseados
  displayedColumnsHistorial: string[] = [
    //columnas para la tabla historial
    'Imagen',
    'Nombre',
    'Precio',
    'Cantidad',
    'Fecha',
  ];
  displayedColumnsDeseados: string[] = [
    //columnas para la tabla deseados
    'Imagen',
    'Nombre',
    'Precio',
    'Boton',
  ];

  //Compruebo si vienen datos si no hay se vuelven true y muestran un div
  hayContenidoDeseados: any = false;
  hayContenidoHistorial: any = false;

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private autenticacionServe: AutenticacionService,
    private http: HttpClient,
    private _builder: FormBuilder,
    private router: Router
  ) {
    this.esperarConstruccion(); //Espero un segundo para que el formulario tenga los datos y pueda construirse

    //Construyo formulario
    this.signupForm = this._builder.group({
      username: [, Validators.required],
      nombre: [Validators.required],
      apellidos: [Validators.required],
      email: [Validators.required],
      telefono: [Validators.required],
      direccion: [Validators.required],
    });
  }

  ngOnInit(): void {
    this.asignarDatos();
    this.asignarHistorial();
    this.asignarDeseados();
  }

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  esperarConstruccion() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('\t\t This is second promise');
        this.construir();
      }, 1000); //1 segundo
    });
  }

  construir() {
    //Actualizo el formulario con datos
    this.signupForm = this._builder.group({
      username: [this.userData.data.nick, Validators.required],
      nombre: [this.userData.data.nombre, Validators.required],
      apellidos: [this.userData.data.apellidos, Validators.required],
      email: [
        this.userData.data.email,
        Validators.compose([Validators.email, Validators.required]),
      ],
      telefono: [this.userData.data.telefono, Validators.required],
      direccion: [this.userData.data.direccion, Validators.required],
    });
  }

  //Asigno los deseados  a la tabla
  asignarDeseados() {
    this.http
      .get('http://127.0.0.1:8000/api/deseados/usuario/' + this.user.id)
      .subscribe((result) => {
        this.asignar = result;

        if (this.asignar.length === 0) {
          this.hayContenidoDeseados = true;
        }
        this.deseadoSource = new MatTableDataSource(this.asignar);
        this.deseadoSource.paginator = this.paginator2;
      });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;

  //Asigno el historial a la tabla
  asignarHistorial() {
    this.http
      .get('http://127.0.0.1:8000/api/ventas/usuario/' + this.user.id)
      .subscribe((result) => {
        this.asignar = result;

        if (this.asignar.length === 0) {
          this.hayContenidoHistorial = true;
        }
        this.historialSource = new MatTableDataSource(this.asignar);
        this.historialSource.paginator = this.paginator;
      });
  }

  //Asigno los datos a la varible
  private async asignarDatos() {
    this.user = this.autenticacionServe.getIdUser();
    const data = await this.http
      .get('http://127.0.0.1:8000/api/usuarios/' + this.user.id)
      .toPromise();
    this.userData = data;
    console.log(this.user.id);
  }

  //Actualizo los datos y los envio a la BBDD
  submit(evento: any) {
    console.log('lo hace')
    this.http
      .put('http://127.0.0.1:8000/api/usuarios/' + this.user.id, {
        nombre: this.signupForm.controls['nombre'].value,
        apellidos: this.signupForm.controls['apellidos'].value,
        nick: this.signupForm.controls['username'].value,
        telefono: this.signupForm.controls['telefono'].value,
        email: this.signupForm.controls['email'].value,
        direccion: this.signupForm.controls['direccion'].value,
      })
      .toPromise()
      .then((data: any) => {
        console.log(data)
      });
  }

  //Elemino de la BBDD el articulo seleccionado
  eliminarDeseado(elemento: any) {
    this.http
      .delete('http://127.0.0.1:8000/api/lista_producto_deseados/' + elemento.id + "/" + this.user.id)
      .subscribe({
        next: (data) => {
          this.asignarDeseados();
        },
      });
  }

  //Redirige al producto seleccionado
  redirigir(event: any) {
    this.router.navigate(['/product/' + event.id]);
  }

  //Envia el usuario a una pagina para cambiar su contraseña y crea un token especifico para que pueda crearla
  cambiarContra() {
    this.http
      .get(
        'http://127.0.0.1:8000/api/usuarios/correo/' +
          this.signupForm.controls.email.value
      )
      .subscribe((result) => {
        localStorage.setItem('password', JSON.stringify(result));
        this.router.navigate(['/recuperar-password']);
      });
  }
}
