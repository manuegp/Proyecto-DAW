import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

retrieveForm : FormGroup;
  constructor(    private _builder : FormBuilder, private http:HttpClient, private router:Router) {
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
      this.router.navigate(['home']);

  }

  pass_correcto = false;

  comprobarNuevaContrasena() {

    let contra= this.retrieveForm.get("contra")?.value
    let contraConf = this.retrieveForm.get("confirmarContra")?.value
    console.log(contra);
    console.log(contraConf);
    console.log(!contra.trim().length)
    console.log(!contraConf.trim().length)
    
     if(contra != contraConf || this.isEmpty(contra) == true && this.isEmpty(contraConf) == true){
      
      console.log(" no coinciden");
      this.pass_correcto= false;

    }else if(contra == contraConf){
      console.log("coinciden");
      this.pass_correcto= true;
    }    

  }

  isEmpty(str) {
    console.log(!str.trim().length)
  return !str.trim().length;
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
