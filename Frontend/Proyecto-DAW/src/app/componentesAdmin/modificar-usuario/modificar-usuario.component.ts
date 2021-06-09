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
  checked = false;
  

  signupForm : FormGroup

  constructor(
    private _builder : FormBuilder,
    private http:HttpClient,
    private dialogRef: MatDialogRef<ModificarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    
    this.signupForm = this._builder.group({
      nombre: [data.nombre, Validators.required],
      apellido: [data.apellidos, Validators.required], 
      nick: [data.nombre_usuario, Validators.required], 
      telefono: [data.telefono, Validators.required],  
      es_admin: []
    })
    
  }

  
  ngOnInit(): void {
    console.log(this.data)
    if(this.data.es_admin == 1){
      this.checked = true;
    }
  }
 
  submit(){
    console.log("lo hace")
    this.enviarDatos(
      this.signupForm.controls['nombre'].value,
      this.signupForm.controls['apellido'].value,
      this.signupForm.controls['nick'].value,
      this.signupForm.controls['telefono'].value,
      this.getNumberFromAdmin()
      
    )
    
  }

  getNumberFromAdmin(){
    if(this.checked == false ){
      console.log("falso")
      return 0;
    }else{
      console.log("true")
      return 1;
    }
  }
  enviarDatos( nombre: string, apellido: string,  nick: string, telefono: number, es_admin : any){
     console.log
    this.http.put("http://127.0.0.1:8000/api/usuarios/"+ this.data.id,{
      nombre: nombre,
      apellido:  apellido,
      nick:  nick,
      telefono: telefono,
      es_administrador: es_admin
      }).toPromise().then((data:any) => {
        console.log(data)
        console.log(JSON.stringify(data.JSON))
        this.dialogRef.close()
        
      })
    
    }

  cancelar(){
    
    this.dialogRef.close();
  }
}
