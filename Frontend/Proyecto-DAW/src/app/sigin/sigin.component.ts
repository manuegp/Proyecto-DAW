import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css'],
})
export class SiginComponent {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  signupForm: FormGroup; //Formulario
  url = 'http://127.0.0.1:8000/api/usuarios';
  contrasenas = false; //true: coinciden
  idUser: any;
  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private _builder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    //Construyo el formulario
    this.signupForm = this._builder.group({
      username: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      contraseña: ['', Validators.required],
      confcontraseña: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  enviarDatos( //Llevo los datos a la base de datos
    nombre: string,
    apellidos: string,
    password: string,
    nick: string,
    telefono: number,
    email: string,
    direccion: string
  ) {

    //Creo primero el usuario
    this.http
      .post(this.url, {
        nombre: nombre,
        apellidos: apellidos,
        password: password,
        nick: nick,
        telefono: telefono,
        email: email,
        es_administrador: 0,
        direccion: direccion,
      })
      .toPromise()
      .then((data: any) => {
        this.idUser = data.data.id;
        console.log(data.data.id);

        //Luego cogo el id del usuario creado y creo su carrito y su lista de deseados
        this.http
          .post('http://127.0.0.1:8000/api/carrito', {
            id_usuario: this.idUser,
          })
          .toPromise()
          .then((data: any) => {
          });

        this.http
          .post('http://127.0.0.1:8000/api/deseados', {
            id_usuario: this.idUser,
          })
          .toPromise()
          .then((data: any) => {

          });

      });



    this.http
      .get(
        'http://127.0.0.1:8000/api/email_registro/' +
        this.signupForm.controls.email.value
      )
      .subscribe();
  }

  submit(values: FormGroup) {
    this.enviarDatos(
      this.signupForm.controls['nombre'].value,
      this.signupForm.controls['apellidos'].value,
      this.signupForm.controls['contraseña'].value,
      this.signupForm.controls['username'].value,
      this.signupForm.controls['telefono'].value,
      this.signupForm.controls['email'].value,
      this.signupForm.controls['direccion'].value
    );
    confirm('Cuenta creada con exito, recibira un email');
    //this.router.navigate(['home']);
  }

  //Compruebo que la nueva contraseña coincida con su confirmacion
  comprobarContra() {
    let contra = this.signupForm.get('contraseña')?.value;
    let contraConf = this.signupForm.get('confcontraseña')?.value;

    if (
      contra != contraConf ||
      (this.isEmpty(contra) == true && this.isEmpty(contraConf) == true)
    ) {
      this.contrasenas = false;
    } else if (contra == contraConf) {
      this.contrasenas = true;
    }
  }

  //me devuelve true en caso de que el parametro este vacio o que solo tenga espacios
  isEmpty(str) {
    return !str.trim().length;
  }
}
