import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AutenticacionService } from '../login/autenticacion.service';
import { waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  panelOpenState = false; //Para abrir el panel extensible
  data: any; //Datos de los articulos
  safeUrl: any; //URL del video segura
  videoURL: any; //URL del video no segura
  idUser: any; //ID del usuario logueado
  cesta: any; //cesta del usuario
  deseados: any; //deseados del usuario
  enCesta: boolean = false; //Si se encuentra en cesta del usuario
  enDeseado: boolean = false; //Si se encuentra en deseado del usuario
  idEnDeseados: any; //ID en la tabla de deseados
  idEnCesta: any; //ID en la tabla de carrito
  id: any; //id de la url
  esOferta: boolean = false; //si el producto esta en oferta
  descuentoAplicado: any; //precio con descuento aplicado

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private _ac: ActivatedRoute,
    private http: HttpClient,
    private autenticacionServe: AutenticacionService,
    private dialog: MatDialog,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.obtenerID();
    //this.obtenerArticulos();
    this.idUser = this.autenticacionServe.getIdUser(); //Consigo el id del usuario
    this.obtenerCarrito(this.idUser);
    this.obtenerDeseados(this.idUser);

    //this.comprobarCarrito(this.cesta)
    
  }
  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  obtenerArticulos() {
    //obtengo el articulo con el id de la url
    this.http
      .get('http://127.0.0.1:8000/api/articulos/juego/' + this.id)
      .subscribe((result) => {
        this.asignarArticulos(result);
        console.log(result);
      });
  }

  //asigno los usuarios saneando la url del video y compruebo si tiene oferta
  asignarArticulos(dato: any) {
    this.data = dato[0];
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.data.video
    );
    this.comprobarOferta(this.data);
  }

  //Compruebo si es oferta y luego hago el descuento
  comprobarOferta(dato: any) {
    if (dato.porcentaje != 0) {
      this.esOferta = true;
      this.hacerDescuento(dato);
    }
  }

  //Aplico el descuento y lo guardo
  hacerDescuento(data: any) {
    let porcentajeInvertido = data.porcentaje;
    porcentajeInvertido = 1 - porcentajeInvertido * 0.01;
    porcentajeInvertido = data.precio * porcentajeInvertido;
    this.descuentoAplicado = porcentajeInvertido.toFixed(2);
  }

  //Obtengo id de la URL
  obtenerID() {
    this._ac.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.id = id;
      this.obtenerArticulos();
    });
    
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

  //Compruebo si el articulo esta en el carrito del usuario
  comprobarCarrito(cesta: any) {
    for (var i = 0; i < cesta.length; i++) {
      if (cesta[i].id == this.id) {
        this.idEnCesta = this.cesta[i].id;
        this.enCesta = true;
      }
    }
  }

  //Obtengo los deseados deol usuario
  obtenerDeseados(user: any) {
    this.http
      .get('http://127.0.0.1:8000/api/deseados/usuario/' + user.id)
      .subscribe((result) => {
        this.deseados = result;
        this.comprobarDeseados(this.deseados);
        console.log(this.deseados);
      });
  }

  //Compruebo si el usuario tiene el articulo en su lista de deseados
  comprobarDeseados(deseados: any) {
    
    for (var i = 0; i < deseados.length; i++) {
      if (deseados[i].id == this.id) {
        this.idEnDeseados = this.deseados[i].id;
        this.enDeseado = true;
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
      .post('http://127.0.0.1:8000/api/lista_producto_carritos/añadir', {
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
      .delete('http://127.0.0.1:8000/api/lista_producto_carritos/' + this.idEnCesta + "/" + this.idUser.id)
      .subscribe({
        next: (data) => {
        },
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
      .delete('http://127.0.0.1:8000/api/lista_producto_deseados/' + this.idEnDeseados + "/" + this.idUser.id)
      .subscribe({
        next: (data) => {
        },
      });
  }

  //Añado deseado de la base de datos
  añadirDeseadosBBDD() {
    console.log(this.idUser.id);
    console.log(this.id);
    this.http
      .post('http://127.0.0.1:8000/api/lista_producto_deseados/añadir', {
        id_usuario: this.idUser.id,
        id_articulo: this.id,
      })
      .toPromise()
      .then((data: any) => {
        
        this.obtenerDeseados(this.idUser);
      });
  }
}
