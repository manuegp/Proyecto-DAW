import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent  {
  signupForm : FormGroup

  constructor(
    private _builder : FormBuilder,
    private http:HttpClient,
    private dialogRef: MatDialogRef<ModificarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.signupForm = this._builder.group({
      nombre: [data.nombre, Validators.required],
      descripcion: [data.descripcion, Validators.required], 
      precio: [data.precio, Validators.required], 
      fecha_salida: [data.fecha_salida, Validators.required], 
      imagen: [''], 
    })
    
  }

  ngOnInit(): void {
  }
 
  modUser:any;

  cancelar(){
    this.dialogRef.close();
  }
}
