import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
 

})
export class SiginComponent  {

 signupForm : FormGroup 

   url = "http://127.0.0.1:8000/api/usuarios";

  enviarDatos(nombre:string, apellidos:string, password:string, nick:string,  telefono:number, email:string,){
    this.http.post(this.url,{
        nombre: nombre,
        apellidos: apellidos,
        password: password,
        nick: nick,
        telefono: telefono,
        email: email
    }).toPromise().then((data:any) => {
      console.log(data)
      console.log(JSON.stringify(data.JSON))
    })

  }
  constructor(
    private _builder : FormBuilder,
    private http:HttpClient,
    private router:Router
  ) { 
    this.signupForm = this._builder.group({
      username:['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required], 
      email: ['', Validators.compose([Validators.email, Validators.required])],
      telefono: ['', Validators.required],
      contraseña: ['', Validators.required],
      confcontraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

 
  submit(values: FormGroup){
    this.enviarDatos(this.signupForm.controls['nombre'].value,
    this.signupForm.controls['apellidos'].value, 
    this.signupForm.controls['contraseña'].value, 
    this.signupForm.controls['username'].value,
    this.signupForm.controls['telefono'].value,
    this.signupForm.controls['email'].value  
    );
    
    this.router.navigate(['home']);
    
  }

  contrasenas= false;
  comprobarContra(){
    
    let contra= this.signupForm.get("contraseña")?.value
    let contraConf = this.signupForm.get("confcontraseña")?.value
    console.log(contra);
    console.log(contraConf);
    if(contra == contraConf){
      console.log("coinciden");
      this.contrasenas= true;
    }else{
      console.log(" no coinciden");
      this.contrasenas= false;

    }
   }
}
