import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Inject } from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public data: any,


    private dialogRef: MatDialogRef<ModificarProductoComponent>
  ) { 
    this.signupForm = this._builder.group({
      nombre: [data.nombre, Validators.required],
      descripcion: [data.descripcion, Validators.required], 
      precio: [data.precio, Validators.required], 
      fecha_salida: [data.fecha_salida, Validators.required], 
      imagen: ['', Validators.required], 
    })
  }
  url = "http://127.0.0.1:8000/api/articulos";

  ngOnInit(): void {
    console.log(this.data);
    
  }

  submit(){

  }

  cancelar(){
    this.dialogRef.close();
  }


  

  
}
