import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { AutenticacionService } from '../login/autenticacion.service';
import { LoginComponent } from '../login/login.component';
import { PaymentComponent } from '../payment/payment.component';

export interface juego {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  idUser: any; //Id del ususario
  juegosCesta: any; //Juegos en la cesta del usuario
  totalCoste: any; //Coste total de los productos

  displayedColumns: string[] = [ //Columnas de la tabla
    'Imagen',
    'Nombre',
    'Precio',
    'Cantidad',
    'Boton',
  ];
  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  ngOnInit(): void {
    this.idUser = this.autenticacionServe.getIdUser();
    this.obtenerArticulos();
  }
  constructor(
    private http: HttpClient,
    private autenticacionServe: AutenticacionService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    this.calcularTotal();
  }

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Se abre un dialog y envio el coste total
  pagar() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(PaymentComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        cantidad: this.totalCoste,
        juegos: this.juegosCesta,
      },
    });
    this.dialog.afterAllClosed.subscribe((result) => {});
  }

  
  //Recoge el total de todos los articulos aplicando descuentos y lo redondea a 2 decimales
  calcularTotal() {
    let total = 0;
    for (let i = 0; i < this.juegosCesta.length; i++) {
      total =
        total +
        this.aplicarDescuento(
          this.juegosCesta[i].precio,
          this.juegosCesta[i].porcentaje
        ) *
          this.juegosCesta[i].cantidad;
    }
    this.totalCoste = total.toFixed(2);
  }


  //Decuelve el precio rebajado
  aplicarDescuento(precio, descuento) {
    let porcentajeInvertido = descuento;
    porcentajeInvertido = 1 - porcentajeInvertido * 0.01;
    porcentajeInvertido = precio * porcentajeInvertido;
    let descuentoAplicado = porcentajeInvertido.toFixed(2);
    return descuentoAplicado;
  }

  //Obtengo todos los articulos del usuario
  obtenerArticulos() {
    this.http
      .get('http://127.0.0.1:8000/api/carrito/usuario/' + this.idUser.id)
      .subscribe((result) => {
        this.juegosCesta = result;
      });
  }
  

  //Al darle click a un producto te redirige a su pagina
  redirigir(event: any) {
    this.router.navigate(['/product/' + event]);
  }

  //Al cambiar la cnatidad del producto se actualiza en la base de datos
  cambioCantidad(event: any, elemento: any) {
    let idCambiar = this.localizarElemento(elemento);
    this.juegosCesta[idCambiar].cantidad = event;

    this.http
      .put('http://127.0.0.1:8000/api/carrito/' + elemento.id, {
        cantidad: event,
      })
      .toPromise();
    this.calcularTotal();
  }

  //Elimina de la base de datos
  eliminarDelCarrito(elemento: any) {
    this.http
      .delete('http://127.0.0.1:8000/api/carrito/' + elemento.id)
      .subscribe({
        next: (data) => {
          window.location.reload();
        },
      });
  }

  //Localiza elemnto al que se esta haciendo click y devuelve su id
  localizarElemento(elemento: any) {
    for (let i = 0; i < this.juegosCesta.length; i++) {
      if (elemento.id == this.juegosCesta[i].id) {
        return i;
      }
    }
    return 0;
  }
}
