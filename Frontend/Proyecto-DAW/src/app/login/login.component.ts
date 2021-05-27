import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login: FormGroup 
  constructor(
    private _builder : FormBuilder,

  ) { 
    this.login = this._builder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
 submit(){
console.log("da")
  

 }
}
