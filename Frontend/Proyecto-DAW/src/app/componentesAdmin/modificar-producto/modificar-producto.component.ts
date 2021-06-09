import { HttpClient } from '@angular/common/http';
import { Component, OnInit,NgZone  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'


import { Inject } from '@angular/core';
@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent  {
  signupForm : FormGroup;
  idCrear: any;
  
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
      imagen: [data.imagen, Validators.required], 
    })
  }
  

  ngOnInit(): void {
    console.log(this.data)
    
  }

  submit(){
      this.enviarDatos( 
                        this.data.tipo,
                        this.data.id , 
                        this.signupForm.controls['nombre'].value, 
                        this.signupForm.controls['descripcion'].value,
                        this.signupForm.controls['precio'].value,
                        this.signupForm.controls['fecha_salida'].value,
                        this.signupForm.controls['imagen'].value);
                        
      
  }

  cancelar(){
    this.dialogRef.close();
  }


  


  urlAdd = "http://127.0.0.1:8000/api/articulos";

enviarDatos( tipo: string ,id:number, nombre:string, descripcion:string, precio:number, fecha:string, imagen: File){
  if(tipo == 'update'){  
  this.http.put("http://127.0.0.1:8000/api/articulos/"+ id,{
        nombre: nombre,
        descripcion: descripcion,
        precio:precio,
        fecha_salida: fecha,
        imagen_principal: imagen
    }).toPromise().then((data:any) => {
      console.log(data)
      console.log(JSON.stringify(data.JSON))
      this.dialogRef.close()
      
    })
  }else if(tipo == 'add'){
    this.http.post(this.urlAdd,{
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      fecha_salida: fecha,
      imagen_principal : imagen
  }).toPromise().then((data:any) => {
    console.log(data)
    console.log(JSON.stringify(data.JSON))
    this.idCrear = data.data.id;
    console.log(data.data.id);
    console.log(this.idCrear);
    this.dialogRef.close()
    this.http.post('http://127.0.0.1:8000/api/ofertas', {
      id_articulo: this.idCrear,
      porcentaje: 0,
    }).toPromise()
      .then((data: any) => {
        console.log(data);
        console.log(JSON.stringify(data.JSON));
        this.dialogRef.close();
    });
  })
  }
  }
  

  
}
