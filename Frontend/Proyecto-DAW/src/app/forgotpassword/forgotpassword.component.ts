import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------

  signupForm: FormGroup;
  mensaje: string;
  correo: any;

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------

  constructor(private _builder: FormBuilder, private http: HttpClient) {
    //Se inicia el mensaje y el formulario
    this.mensaje = '';
    this.signupForm = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
    });
  }

  ngOnInit(): void {}

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  submit(value: any) {
    this.http
      .get(
        'http://127.0.0.1:8000/api/usuarios/correo/' +
          this.signupForm.controls.email.value
      )
      .subscribe((result) => {
        this.correo = result;

        if (
          this.correo.length != 0 &&
          this.correo[0].email == this.signupForm.controls.email.value
        ) {
          localStorage.setItem('password', JSON.stringify(result));
          this.enviarCorreo();
        } else {
          this.mensaje = 'Este correo no esta registrado';
        }
      });
  }

  enviarCorreo() {
    this.http
      .get(
        'http://127.0.0.1:8000/api/email_password/' +
          this.signupForm.controls.email.value
      )
      .subscribe((result) => {
        this.mensaje = 'Email enviado revisa tu correo';
      });
  }
}
