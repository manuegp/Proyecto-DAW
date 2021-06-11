import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { resourceLimits } from 'worker_threads';
import { AutenticacionService } from '../login/autenticacion.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css'],
})
export class MerchComponent implements OnInit {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  data: any; //Datos de los articulos
  id: any; //Id de la url de la pagina
  deseados: any; //articulos de los deseados del usuario
  cesta: any; //articulos de la cesta del usuario
  enDeseado: boolean = false; //True: esta en el deseado del usuario
  enCesta: boolean = false; //True: esta en el carrito del usuario
  idUser: any; //Id del usuario
  idEnDeseados: any; //Id del articulo en la tabla deseados
  idEnCesta: any; //Id del articulo en la tabla cesta

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private http: HttpClient,
    private autenticacionServe: AutenticacionService,
    private _ac: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerID();
    this.obtenerArticulo();
    this.idUser = this.autenticacionServe.getIdUser();
    this.obtenerCarrito(this.idUser);
    this.obtenerDeseados(this.idUser);
  }
  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Obtengo todos los articulos de merch y los asigno
  obtenerArticulo() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos/merch/' + this.id)
      .toPromise()
      .then((result) => {
        this.asignarArticulos(result);
      });
  }

  //Obtengo todos los articulos deseados del ususario

  obtenerDeseados(user: any) {
    this.http
      .get('http://127.0.0.1:8000/api/deseados/usuario/' + user.id)
      .subscribe((result) => {
        this.deseados = result;

        this.comprobarDeseados(this.deseados);
      });
  }

  //Compruebo si tiene oferta
  asignarArticulos(dato: any) {
    this.data = dato[0];

    this.comprobarOferta(this.data);
  }

  //Obtengo el id del articulo
  obtenerID() {
    this._ac.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.id = id;
    });
  }

  //Compruebo si el usuario tiene este producto en su lista de deseados
  comprobarDeseados(deseados: any) {
    for (var i = 0; i < deseados.length; i++) {
      if (deseados[i].id_articulo == this.id) {
        this.idEnDeseados = this.deseados[i].id;

        this.enDeseado = true;
      }
    }
  }

  //Obtengo el carrito del usuario
  obtenerCarrito(user: any) {
    this.http
      .get('http://127.0.0.1:8000/api/carrito/usuario/' + user.id)
      .subscribe((result) => {
        this.cesta = result;
        this.comprobarCarrito(this.cesta);
      });
  }

  //Conpruebo si el usuario tiene este articulo y cambio la variable 'enCesta'
  comprobarCarrito(cesta: any) {
    for (var i = 0; i < cesta.length; i++) {
      if (cesta[i].id_articulo == this.id) {
        this.idEnCesta = this.cesta[i].id;

        this.enCesta = true;
      }
    }
  }

  //Comprueba si el producto esta en la cesta del usuario y lo añade o quita
  anadirCesta() {
    if (this.idUser != '') {
      if (this.enCesta == true) {
        this.enCesta = false;
        this.borrarBBDD();
      } else if (this.enCesta == false) {
        this.enCesta = true;

        this.añadirBBDD();
      }
    } else {
      this.enCesta = false;
      this.onCreate();
    }
  }

  onCreate() {
    //En caso que el usuario no este logeado se abrira este dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(LoginComponent, { panelClass: 'custom-dialog-container' });
    this.dialog.afterAllClosed.subscribe((result) => {
      window.location.reload();
    });
  }

  //Añado el articulo del carrito de la base de datos
  añadirBBDD() {
    this.http
      .post('http://127.0.0.1:8000/api/carrito', {
        id_usuario: this.idUser.id,
        id_articulo: this.id,
        cantidad: 1,
      })
      .toPromise()
      .then((data: any) => {
        this.obtenerCarrito(this.idUser);
      });
  }

  //Borro el articulo del carrito de la base de datos
  borrarBBDD() {
    this.http
      .delete('http://127.0.0.1:8000/api/carrito/' + this.idEnCesta)
      .subscribe({
        next: (data) => {},
      });
  }

  //Compruebo si esta deseado y lo borro o añado a la base de datos, y en caso de que el usuario no este logueado le abrira el dialog login
  anadirDeseados() {
    if (this.idUser != '') {
      if (this.enDeseado == true) {
        this.enDeseado = false;
        this.borrarDeseadosBBDD();
      } else if (this.enDeseado == false) {
        this.enDeseado = true;

        this.añadirDeseadosBBDD();
      }
    } else {
      this.enDeseado = false;
      this.onCreate();
    }
  }

  //Borro deseado de la base de datos
  borrarDeseadosBBDD() {
    this.http
      .delete('http://127.0.0.1:8000/api/deseados/' + this.idEnDeseados)
      .subscribe({
        next: (data) => {},
      });
  }

  //Añado deseado de la base de datos
  añadirDeseadosBBDD() {
    this.http
      .post('http://127.0.0.1:8000/api/deseados', {
        id_usuario: this.idUser.id,
        id_articulo: this.id,
      })
      .toPromise()
      .then((data: any) => {
        this.obtenerDeseados(this.idUser);
      });
  }

  esOferta: boolean = false;
  descuentoAplicado: any;

  //Si tiene oferta cambio la variable esOferta a true y le hago el descuento
  comprobarOferta(dato: any) {
    if (dato.porcentaje != 0) {
      this.esOferta = true;
      this.hacerDescuento(dato);
    }
  }

  //Saco el valor del descuento
  hacerDescuento(data: any) {
    let porcentajeInvertido = data.porcentaje;
    porcentajeInvertido = 1 - porcentajeInvertido * 0.01;
    porcentajeInvertido = data.precio * porcentajeInvertido;
    this.descuentoAplicado = porcentajeInvertido.toFixed(2); //Saco 2 decimales y aplico el descuento
  }
}
