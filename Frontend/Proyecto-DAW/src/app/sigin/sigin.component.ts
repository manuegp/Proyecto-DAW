import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
 

})
export class SiginComponent  {

 signupForm : FormGroup 

  

  constructor(
    private _builder : FormBuilder
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
    console.log(values);
    
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
