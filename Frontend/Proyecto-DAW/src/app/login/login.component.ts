import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { error } from 'selenium-webdriver';

import { ModificarProductoComponent } from '../componentesAdmin/modificar-producto/modificar-producto.component';
import { AutenticacionService } from './autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  errorCredeciales: boolean = false;
  login: FormGroup ;
  urlLogin ="http://localhost:8000/api/tokens/create";
  constructor(
    private _builder : FormBuilder,
    private http:HttpClient,
    private dialogRef: MatDialogRef<ModificarProductoComponent>,
    private autenticacionServe:AutenticacionService

  ) { 
    this.login = this._builder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  

 
  

 

 submit(event : any) {

  if (this.login.invalid) {
    console.log("adios");
    
  }

  this.autenticacionServe.login(this.login.controls.email.value, this.login.controls.password.value).subscribe(datos=>{
    localStorage.setItem("usuario", JSON.stringify(datos));
    console.log(datos);
    this.dialogRef.close()
    
    
  }, 
  error =>{
    this.errorCredeciales = true
  }
  ),
    (  error: any) => console.log(error);

  
}

}


