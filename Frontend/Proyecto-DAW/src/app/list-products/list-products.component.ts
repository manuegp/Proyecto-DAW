import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

  
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})




export class ListProductsComponent implements AfterViewInit {
  displayedColumns: string[] = ['Nombre', 'Descripcion', 'Precio', 'Fecha'];
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
