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
import { ModificarUsuarioComponent } from '../modificar-usuario/modificar-usuario.component';
import { EmailValidator, FormGroup } from '@angular/forms';
import { ModificarJuegoComponent } from '../modificar-juego/modificar-juego.component';
import { GestionarOfertasComponent } from '../gestionar-ofertas/gestionar-ofertas.component';
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
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  total:any           //Total valor de todos los porductos de la tabla ventas
  asignar: any;       //Variable para asignar la array a una tabla
  asignarUsu: any;    //Variable para asignar la array a una tabla
  asignarMerch: any;  //Variable para asignar la array a una tabla
  asignarOfer: any;   //Variable para asignar la array a una tabla
  asignarVenta: any;   //Variable para asignar la array a una tabla
  //Columnas usadas en juegos y merchandaising
  displayedColumns: string[] = [
    'Id',
    'Nombre',
    'Descripcion',
    'Precio',
    'Fecha',
    'Modificar',
  ];

  //Columnas usadas en usuarios
  displayedColumnsUsu: string[] = [
    'Id',
    'Nombre',
    'Apellidos',
    'Password',
    'Nick',
    'Telefono',
    'Email',

    'Es_admin',
    'Modificar',
  ];

  //Columnas usadas en ofertas
  displayedColumnsOfer: string[] = [
    'Id',
    'Nombre',
    'Porcentaje',
    'Precio_original',
    'Modificar',
  ];
//Columnas usadas en ventas
  displayedColumnsVentas: string[] = [
    'Articulo',
    'Usuario',
    'Cantidad',
    'Fecha',
    'Total',
    
  ];
  
  //Variables de las tablas
  dataSource: any;
  dataSourceUsuarios: any;
  dataSourceMerch: any;
  dataSourceOfertas: any;
  dataSourceVentas: any;

  //Paginadores
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('usu') paginator2!: MatPaginator;
  @ViewChild('usu2') paginator3!: MatPaginator;
  @ViewChild('ofer') paginator4!: MatPaginator;
  @ViewChild('venta') paginator5!: MatPaginator;

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private dialogañadirArticulos: MatDialog,
    private router: Router
  ) {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.asignarJuegos();
    this.asignarUsuarios();
    this.asignarMerchandising();
    this.asignarOfertas();
    this.asignarVentas();
  }
  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Funciones de filtrado

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterMerch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMerch.filter = filterValue.trim().toLowerCase();
  }

  applyFilterOfertas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceOfertas.filter = filterValue.trim().toLowerCase();
  }

  applyFilterUsu(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUsuarios.filter = filterValue.trim().toLowerCase();
  }
  applyFilterVentas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVentas.filter = filterValue.trim().toLowerCase();
  }

  //Funciones asignar: En estas funciones traigo los datos de sus respectivas BBDD

  asignarJuegos() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos/juegos')
      .subscribe((result) => {
        this.asignar = result;

        this.dataSource = new MatTableDataSource(this.asignar); //Asigno los datos a la tabla
        this.dataSource.paginator = this.paginator; //Vinculo el paginador a la tabla
      });
  }

  asignarUsuarios() {
    this.http.get('http://127.0.0.1:8000/api/usuarios').subscribe((result) => {
      this.asignarUsu = result;

      this.dataSourceUsuarios = new MatTableDataSource(this.asignarUsu.data); //Asigno los datos a la tabla
      this.dataSourceUsuarios.paginator = this.paginator2; //Vinculo el paginador a la tabla
    });
  }

  asignarOfertas() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos/oferta')
      .subscribe((result) => {
        this.asignarOfer = result;

        this.dataSourceOfertas = new MatTableDataSource(this.asignarOfer); //Asigno los datos a la tabla
        this.dataSourceOfertas.paginator = this.paginator4; //Vinculo el paginador a la tabla
      });
  }

  asignarVentas() {
    this.http
      .get('http://127.0.0.1:8000/api/ventas')
      .subscribe((result) => {
        console.log(result)
        this.asignarVenta = result;

        this.dataSourceVentas = new MatTableDataSource(this.asignarVenta); //Asigno los datos a la tabla
        this.dataSourceVentas.paginator = this.paginator5; //Vinculo el paginador a la tabla
        this.getTotal(this.asignarVenta);
      });
  }

  asignarMerchandising() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos/merchs')
      .subscribe((result) => {
        this.asignarMerch = result;

        this.dataSourceMerch = new MatTableDataSource(this.asignarMerch); //Asigno los datos a la tabla
        this.dataSourceMerch.paginator = this.paginator3; //Vinculo el paginador a la tabla
      });
  }

  //Funciones añadir, borrar, modificar
  anadirArticulos(event: any, producto: string) {
    if (producto == 'merch') {  //Tipo de producto
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.closeOnNavigation = true;
      this.dialogañadirArticulos.open(ModificarProductoComponent, {
        panelClass: 'custom-dialog-container',

        data: {
          tipo: 'add',  //Tipo de formulario
          id: null,
          nombre: null,
          descripcion: null,
          precio: null,
          fecha_salida: null,
        },
      });

      this.dialog.afterAllClosed.subscribe((result) => {
        this.asignarMerchandising();
      });
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.closeOnNavigation = true;
      this.dialogañadirArticulos.open(ModificarJuegoComponent, {
        panelClass: 'custom-dialog-container',
        data: {
          tipo: 'add',  //Tipo de formulario
          id: null,
          nombre: null,
          descripcion: null,
          precio: null,
          fecha_salida: null,
          directx: null,
          etiquetas: null,
          graficos: null,
          idioma: null,
          memoria: null,
          os: null,
          plataforma: null,
          storage: null,
          procesador: null,
          tarjeta_sonido: null,
          video: null,
        },
      });

      this.dialog.afterAllClosed.subscribe((result) => {
        this.asignarJuegos()
      });
    }
  }

  borrarArticulos(event: any) {
    this.http
      .delete('http://127.0.0.1:8000/api/articulos/' + event.id)
      .subscribe({
        next: (data) => {
          this.asignarJuegos();
          this.asignarMerchandising();
        },
      });
  }

  modificarArticulos(event: any, producto: string) {
    if (producto == 'merch') { //Tipo de producto
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.closeOnNavigation = true;
      this.dialog.open(ModificarProductoComponent, {
        panelClass: 'custom-dialog-container',
        data: {
          producto: producto,
          tipo: 'update',
          id: event.id,
          nombre: event.nombre,
          descripcion: event.descripcion,
          precio: event.precio,
          fecha_salida: event.fecha_salida,
          imagen: event.imagen_principal,
        },
      });

      this.dialog.afterAllClosed.subscribe((result) => {
        this.asignarJuegos();
      });
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.closeOnNavigation = true;
      this.dialog.open(ModificarJuegoComponent, {
        panelClass: 'custom-dialog-container',
        data: {
          producto: producto,
          tipo: 'update',
          id: event.id,
          nombre: event.nombre,
          descripcion: event.descripcion,
          precio: event.precio,
          fecha_salida: event.fecha_salida,
          imagen: event.imagen_principal,
          directx: event.directx,
          etiquetas: event.etiquetas,
          graficos: event.graficos,
          idioma: event.idioma,
          memoria: event.memoria,
          os: event.os,
          plataforma: event.plataforma,
          storage: event.storage,
          procesador: event.procesador,
          tarjeta_sonido: event.tarjeta_sonido,
          video: event.video,
        },
      });

      this.dialog.afterAllClosed.subscribe((result) => { //Despues que el dialog se cierre
        this.asignarJuegos();
      });
    }
  }

  modificarUsuario(event: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(ModificarUsuarioComponent, {
      //Abro un nuevo dialog con el formulario y al terminar recargo la tabla
      panelClass: 'custom-dialog-container',
      data: {
        id: event.id,
        nombre: event.nombre,
        apellidos: event.apellidos,
        nombre_usuario: event.nick,
        telefono: event.telefono,
        email: event.email,
        es_admin: event.es_administrador,
      },
    });

    this.dialog.afterAllClosed.subscribe((result) => {
      this.asignarUsuarios();
    });
  }

  borrarUsuario(event: any) {
    this.http
      .delete('http://127.0.0.1:8000/api/usuarios/' + event.id)
      .subscribe({
        next: (data) => {
          this.asignarUsuarios(); //Actualizo la tabla
        },
      });
  }

  crearOferta(event: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialogañadirArticulos.open(GestionarOfertasComponent, {
      //Abro un nuevo dialog con el formulario
      panelClass: 'custom-dialog-container',
    });

    this.dialog.afterAllClosed.subscribe((result) => {
      this.asignarOfertas();
    });
  }

  eliminarOferta(element: any) {
    this.http
      .put('http://127.0.0.1:8000/api/ofertas/' + element.id, {
        porcentaje: 0,
      })
      .toPromise()
      .then((data: any) => {
        this.asignarOfertas();  //Actualizo la tabla
      });
  }
 
  //Consigue el total de precios de todo los elementos de la tabla ventas
  getTotal(ventas:any){
    let total=0;
    for (let i = 0; i < ventas.length; i++) {
      total= ventas[i].precio_total + total;
    }
    this.total= total;
  }
}
