import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

  
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})




export class ListProductsComponent  {

  constructor(private http: HttpClient, private router:Router){}
  
  asignar: any;
  dataSource: any;


  ngOnInit(): void {
    this.asignarArticulos();
    
  }
  displayedColumns: string[] = ['Imagen', 'Nombre', 'Descripcion', 'Precio', 'Fecha', ];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  asignarArticulos() {
    this.http.get('http://127.0.0.1:8000/api/articulos/oferta_administrador').subscribe((result) => {
      this.asignar = result;
      console.log(this.asignar);
      this.dataSource = new MatTableDataSource(this.asignar);
      this.dataSource.paginator = this.paginator;
    });
  }

  redirigir(event : any){
  
  this.router.navigate(['/product/'+event.id]);
}
 




}
