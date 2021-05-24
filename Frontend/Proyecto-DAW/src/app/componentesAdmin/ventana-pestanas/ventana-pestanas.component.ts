import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModificarProductoComponent } from 'src/app/componentesAdmin/modificar-producto/modificar-producto.component';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Router } from '@angular/router';
import {ModificarUsuarioComponent} from '../modificar-usuario/modificar-usuario.component'
export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-ventana-pestanas',
  templateUrl: './ventana-pestanas.component.html',
  styleUrls: ['./ventana-pestanas.component.css'],
})
export class VentanaPestanasComponent implements OnInit {
  constructor(private dialog: MatDialog, private http: HttpClient,
    private dialogañadirArticulos: MatDialog,
    private router:Router,) {}


  //Variables
  asignar: any;
  asignarUsu: any;
  ELEMENT_DATA: any;
  displayedColumns: string[] = [
    'Id',
    'Nombre',
    'Descripcion',
    'Precio',
    'Fecha',
    'Modificar',
  ];

  displayedColumnsUsu: string[] = [
    'Id',
    'Nombre',
    'Apellidos',
    'Password',
    'Nick',
    'Telefono',
    'Email',
    'Fecha_creacion',
    'Es_admin',
    'Modificar',
  ];
  dataSource: any;
  dataSourceUsuarios: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('usu') paginator2!: MatPaginator;
  ngAfterViewInit() {}

  ngOnInit(): void {
    this.asignarArticulos();
    this.asignarUsuarios();
  }

 

  

  
//Funciones
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  asignarArticulos() {
    this.http.get('http://127.0.0.1:8000/api/articulos').subscribe((result) => {
      this.asignar = result;
      console.log(this.asignar);
      this.dataSource = new MatTableDataSource(this.asignar.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  anadirArticulos(event: any) {
    console.log('añadiendo');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialogañadirArticulos.open(ModificarProductoComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        tipo: "add",
        id: null,
        nombre:null,
        descripcion: null,
        precio: null,
        fecha_salida: null,
      }
    });

    this.dialog.afterAllClosed.subscribe((result) => {
      this.asignarArticulos();
    });
  }

  borrarArticulos(event: any){
    this.http.delete("http://127.0.0.1:8000/api/articulos/"+ event.id).subscribe({
      next: data => {
         window.location.reload()
      }
     
  });
  
  }

  modificarArticulos(event: any) {
    console.log('modificando');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(ModificarProductoComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        tipo: "update",
        id: event.id,
        nombre: event.nombre,
        descripcion: event.descripcion,
        precio: event.precio,
        fecha_salida: event.fecha_salida,
      },
    });

    this.dialog.afterAllClosed.subscribe((result) => {
      this.asignarArticulos();
    });
  }


  asignarUsuarios() {
    this.http.get('http://127.0.0.1:8000/api/usuarios').subscribe((result) => {
      this.asignarUsu = result;
      console.log(this.asignarUsu);
      this.dataSourceUsuarios = new MatTableDataSource(this.asignarUsu.data);
      this.dataSourceUsuarios.paginator = this.paginator2;
    });
  }

  applyFilterUsu(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUsuarios.filter = filterValue.trim().toLowerCase();
  }

  modificarUsuario(event: any){
    console.log('modificando');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(ModificarUsuarioComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        
        
      },
    });

    this.dialog.afterAllClosed.subscribe((result) => {
      this.asignarUsuarios();
    });
  }

  borrarUsuario(event: any){
    this.http.delete("http://127.0.0.1:8000/api/usuarios/"+ event.id).subscribe({
      next: data => {
         window.location.reload()
      }
     
  });
  }

}