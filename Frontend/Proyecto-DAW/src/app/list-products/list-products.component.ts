import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  asignar: any;   //Variable para asignar la respuesta del servidor a la tabla
  dataSource: any; //Formulario
  displayedColumns: string[] = [ //Columnas de la tabla
    'Imagen',
    'Nombre',
    'Descripcion',
    'Precio',
    'Fecha',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //Paginador

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.asignarArticulos();
  }
  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  applyFilter(event: Event) { //Filtro del buscador
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  asignarArticulos() { //Recoge los datos de la BBDD y los introduce en la tabla
    this.http
      .get('http://127.0.0.1:8000/api/articulos/oferta_administrador')
      .subscribe((result) => {
        this.asignar = result;
        this.dataSource = new MatTableDataSource(this.asignar);
        this.dataSource.paginator = this.paginator;
      });
  }

  //Te lleva al producto en el que has hecho click
  redirigir(event: any) {
    this.router.navigate(['/product/' + event.id]);
  }

}
