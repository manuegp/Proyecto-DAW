import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  signupForm :FormGroup
  
  constructor(    
    private _builder : FormBuilder,
    ) 
    { 
    this.signupForm = this._builder.group({
      email:['', Validators.compose([Validators.email, Validators.required])]
    })
  }

  ngOnInit(): void {
  }


  submit(value: any){

  }
}
