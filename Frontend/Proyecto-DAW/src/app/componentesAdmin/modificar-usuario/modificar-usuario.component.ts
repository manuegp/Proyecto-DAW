import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent  {
  

  constructor(
    private dialogRef: MatDialogRef<ModificarUsuarioComponent>

  ) { }

  ngOnInit(): void {
  }
 
  modUser:any;

  cancelar(){
    this.dialogRef.close();
  }
}
