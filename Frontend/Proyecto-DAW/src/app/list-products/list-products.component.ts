import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import{ articulos} from './articulos';
import{ ARTICULOS} from './mock-articulos';

  
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})




export class ListProductsComponent implements OnInit {
  lista:string[]=[`Nombre`, `Descripcion`, `Precio`,  `Fecha salida` ]
  
  articulo = ARTICULOS;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  dataSource = new MatTableDataSource(ARTICULOS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
