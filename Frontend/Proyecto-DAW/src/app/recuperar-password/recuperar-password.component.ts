import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css'],
})
export class RecuperarPasswordComponent implements OnInit {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  retrieveForm: FormGroup;
  pass_correcto = false;

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private _builder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.retrieveForm = this._builder.group({
      contra: ['', Validators.required],
      confirmarContra: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  submit() {
    let usuario = this.getIdUser();

    alert('La contraseña se ha cambiado correctamente');
    //Se actualiza la contraseña
    this.http
      .put('http://127.0.0.1:8000/api/usuarios/password/' + usuario, {
        password: this.retrieveForm.controls['confirmarContra'].value,
      })
      .toPromise()
      .then((data: any) => {});

    localStorage.removeItem('password'); //Elimino el token
    this.router.navigate(['home']); //Redirige a home
  }

  //Compruebo que la nueva contraseña coincida con su confirmacion
  comprobarNuevaContrasena() {
    let contra = this.retrieveForm.get('contra')?.value;
    let contraConf = this.retrieveForm.get('confirmarContra')?.value;

    if (contra != contraConf ||(this.isEmpty(contra) == true && this.isEmpty(contraConf) == true)
    ) {
      this.pass_correcto = false;
    } else if (contra == contraConf) {
      this.pass_correcto = true;
    }
  }

  //me devuelve true en caso de que el parametro este vacio o que solo tenga espacios
  isEmpty(str) {
    return !str.trim().length;
  }

  //Cojo id del usuario de localstorage
  getIdUser() {
    if (localStorage.getItem('password')) {
      let user = JSON.parse(localStorage.getItem('password') || '{}');
      return user[0].id;
    } else {
      return '';
    }
  }
}
