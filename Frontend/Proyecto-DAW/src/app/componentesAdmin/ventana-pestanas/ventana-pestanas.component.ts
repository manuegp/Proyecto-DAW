import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModificarProductoComponent } from 'src/app/componentesAdmin/modificar-producto/modificar-producto.component';

export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-ventana-pestanas',
  templateUrl: './ventana-pestanas.component.html',
  styleUrls: ['./ventana-pestanas.component.css']
})


export class VentanaPestanasComponent{
  
  modificar(){
      console.log("modificando")
      const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
      this.dialog.open(ModificarProductoComponent, { panelClass: 'custom-dialog-container' });
  }
  

  constructor(private dialog: MatDialog) {
    
  }

  displayedColumns: string[] = ['Nombre', 'Descripcion', 'Precio', 'Fecha', 'Modificar'];
  dataSource = new MatTableDataSource<articulo>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


export interface articulo {
  nombre: string;
  descripcion: number;
  precio: number;
  fecha: any;
}
const ELEMENT_DATA: articulo[] = [
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'heliop', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"},
  { nombre: 'Hydrogen', descripcion: 1.0079, precio:12 , fecha: "2017/02/24"}
];

