import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
retrieveForm : FormGroup;
  constructor(    private _builder : FormBuilder, private http:HttpClient) {
      this.retrieveForm = this._builder.group({
        contra: ['', Validators.required],
        confirmarContra: ['', Validators.required]
      })
      
     }

  ngOnInit(): void {
    

  }

  submit(){

    // this.http.put("http://127.0.0.1:8000/api/usuarios"+)

    let usuario = this.getIdUser();

      alert("La contraseña se ha cambiado correctamente");
      console.log(this.retrieveForm.controls['confirmarContra'].value);

      this.http.put("http://127.0.0.1:8000/api/usuarios/password/"+ usuario, {
        password: this.retrieveForm.controls['confirmarContra'].value
      }).toPromise().then((data:any) => {
        console.log(data);
        console.log(JSON.stringify(data.JSON));

      console.log("Hecho");
        
      });

      localStorage.removeItem("password");
      window.location.href ="home";

  }

  pass_correcto = false;

  comprobarNuevaContrasena() {

    if (this.retrieveForm.controls['contra'].value == this.retrieveForm.controls['confirmarContra'].value) {

      this.pass_correcto = true;

    }    

  }

  getIdUser(){
    if (localStorage.getItem("password")) {
      let user = JSON.parse(localStorage.getItem("password") || '{}')
      console.log(user[0].id)
      return user[0].id;
    }

    else {
      return "";
    }
  }

}
