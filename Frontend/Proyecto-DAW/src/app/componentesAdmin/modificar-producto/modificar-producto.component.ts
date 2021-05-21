import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent  {
  signupForm : FormGroup 

  constructor(
    private _builder : FormBuilder,
    private http:HttpClient,
    private router:Router,
    
    private dialogRef: MatDialogRef<ModificarProductoComponent>
  ) { 
    this.signupForm = this._builder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required], 
      precio: ['', Validators.required], 
      fecha_salida: ['', Validators.required], 
      imagen: ['', Validators.required], 
    })
  }
  url = "http://127.0.0.1:8000/api/usuarios";

  ngOnInit(): void {
  }

  submit(){

  }

  cancelar(){
    this.dialogRef.close();
  }
}
