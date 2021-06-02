import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { AutenticacionService } from '../login/autenticacion.service';

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
 
  allTeamDetails: any;
  constructor(
    private http: HttpClient,
    private autenticacionServe: AutenticacionService,
    private router: Router,
    private _builder: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    this.idUser = this.autenticacionServe.getIdUser();
    this.obtenerArticulos();
    
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
    this.router.navigate(['/product/' + event.id]);
  }

  

  cambioCantidad(event: any, elemento: any){
    console.log(event , elemento)
    this.http.put("http://127.0.0.1:8000/api/carrito/"+ elemento.id,{
        cantidad: event
    }).toPromise()
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
   let idBorrar=  this.localizarElemento(elemento)
    this.juegosCesta = this.juegosCesta.splice(this.juegosCesta- 1, idBorrar)
    console.log(this.juegosCesta)
  }

  localizarElemento(elemento:any){
    for (let i = 0; i < this.juegosCesta.length; i++) {
      if(elemento.id == this.juegosCesta[i].id){
        console.log(i)
        return i;
      }
   }
   return null
  }

  
}
