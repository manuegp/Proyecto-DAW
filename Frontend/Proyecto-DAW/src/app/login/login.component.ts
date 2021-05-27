import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ModificarProductoComponent } from '../componentesAdmin/modificar-producto/modificar-producto.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login: FormGroup ;
  urlLogin ="http://localhost:8000/api/tokens/create";
  constructor(
    private _builder : FormBuilder,
    private http:HttpClient,
    private dialogRef: MatDialogRef<ModificarProductoComponent>

  ) { 
    this.login = this._builder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

 submit(event : any){
  this.http.post(this.urlLogin,{
    email: this.login.controls['email'].value, 
    password:this.login.controls['password'].value

}).toPromise().then((data:any) => {
  console.log(data)
  console.log(JSON.stringify(data.JSON))
  this.dialogRef.close()
})
  

 }
}
