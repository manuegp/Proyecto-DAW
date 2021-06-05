import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
retrieveForm : FormGroup;
  constructor(    private _builder : FormBuilder,
    ) {

      this.retrieveForm = this._builder.group({
        contra: ['', Validators.required],
        confirmarContra: ['', Validators.required]
      })
     }

  ngOnInit(): void {
  }

  submit(){
    //Aqui se envia
  }
}
