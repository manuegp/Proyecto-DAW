import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ModificarProductoComponent } from '../componentesAdmin/modificar-producto/modificar-producto.component';
import { AutenticacionService } from './autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  errorCredeciales: boolean = false;
  login: FormGroup;

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private _builder: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialogRef<ModificarProductoComponent>,
    private autenticacionServe: AutenticacionService,
    private router: Router

  ) {
    this.login = this._builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void { }


  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  submit(event: any) {

    //Ejecuto la funcion login, el cual se encuentra en autenticacion.service.ts; y con los datos que devuelve,
    //creo el localStorage usuario para guardar los datos del usuario loggeado
    this.autenticacionServe.login(this.login.controls.email.value, this.login.controls.password.value).subscribe(datos => {
      localStorage.setItem("usuario", JSON.stringify(datos));
      this.dialogRef.close()

      //Si existe el localStorage "password", indicando que ha pedido cambiar la contraseña pero no la ha cambiado
      //cuando se logee se quitará 
      if (localStorage.getItem("password")) {
        localStorage.removeItem("password");
      }

      this.router.navigate(['home']); //Redirige a home


    },
      error => {
        console.log(error)
        this.errorCredeciales = true
      }
    ),
      (error: any) => console.log(error);


  }

}


