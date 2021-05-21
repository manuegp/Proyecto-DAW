import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModificarProductoComponent } from 'src/app/componentesAdmin/modificar-producto/modificar-producto.component';
import { HttpClient } from '@angular/common/http';

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
  url = "http://127.0.0.1:8000/api/usuarios";
  

  getArticulos(){
    this.http.post(this.url,{
      
  }).toPromise().then((data:any) => {
    console.log(data)
    console.log(JSON.stringify(data.JSON))
  })

  }

  modificar(){
      console.log("modificando")
      const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
      this.dialog.open(ModificarProductoComponent, { panelClass: 'custom-dialog-container' });
  }
  

  constructor(private dialog: MatDialog,
              private http:HttpClient,) {
    
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

  ngOnInit(): void {
    this.getArticulos();
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

