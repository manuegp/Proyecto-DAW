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
  idUser: any;
  juegosCesta: any;
  totalCoste:any;

  constructor(
    private http: HttpClient,
    private autenticacionServe: AutenticacionService,
    private router: Router,
    private dialog: MatDialog,

  ) {
    
  }

  pagar(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(PaymentComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        cantidad: this.totalCoste
        
        
      },
    })
    this.dialog.afterAllClosed.subscribe((result) => {
      
    });
  }

  ngOnInit(): void {
    this.idUser = this.autenticacionServe.getIdUser();
    this.obtenerArticulos();
    
  }

  ngAfterViewInit(): void{
    this.calcularTotal()
  }
  calcularTotal(){
    let total = 0;
    for (let i = 0; i < this.juegosCesta.length; i++) {
      total = total + (this.juegosCesta[i].precio * this.juegosCesta[i].cantidad)
    }
    console.log(this.juegosCesta, total)
    this.totalCoste = total.toFixed(2)
  }
 
  
  obtenerArticulos() {
    this.http
      .get('http://127.0.0.1:8000/api/carrito/usuario/' + this.idUser.id)
      .subscribe((result) => {
        console.log(this.idUser.id);
        this.juegosCesta = result;
        console.log(this.juegosCesta);
        
      });
  }
  displayedColumns: string[] = [
    'Imagen',
    'Nombre',
    'Precio',
    'Cantidad',
    'Boton',
  ];

  redirigir(event: any) {
    this.router.navigate(['/product/' + event]);
  }

  

  cambioCantidad(event: any, elemento: any){
    
    console.log(event , elemento)
    let idCambiar =this.localizarElemento(elemento)
    this.juegosCesta[idCambiar].cantidad = event;

    this.http.put("http://127.0.0.1:8000/api/carrito/"+ elemento.id,{
        cantidad: event
    }).toPromise()
    this.calcularTotal()
  }

  eliminarDelCarrito(elemento:any){
    this.http.delete("http://127.0.0.1:8000/api/carrito/"+ elemento.id).subscribe({
      next: data => {
          console.log(elemento)
          this.borro(elemento)
      }
     
  });
  }

  borro(elemento:any){
    console.log(elemento);

   //Codigo actualmente no funcional
   /* let idBorrar=  this.localizarElemento(elemento)
   console.log(idBorrar)
   this.juegosCesta = this.juegosCesta.splice(idBorrar, 1)
    console.log(this.juegosCesta)
    this.calcularTotal()
     */
    window.location.reload()
    console.log(this.juegosCesta)
  }

  localizarElemento(elemento:any){
    for (let i = 0; i < this.juegosCesta.length; i++) {
      if(elemento.id == this.juegosCesta[i].id){
        console.log(i)
        return i;
      }
   }
   return 0
  }

  
}
