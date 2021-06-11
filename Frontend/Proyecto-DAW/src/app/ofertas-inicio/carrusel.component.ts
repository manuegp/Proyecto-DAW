import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent  {
  ofertas: any;

  constructor(private http: HttpClient, private router:Router
    ) {this.conseguirTotalOfertas() }
      conseguirTotalOfertas(){
      this.http.get('http://127.0.0.1:8000/api/articulos/oferta').toPromise().then(data =>{
             console.log(data)
             this.ofertas= data
             console.log(this.ofertas)
          })
       }
  ngOnInit(): void {
    
  }

  redirigir(element:any){
   
    this.router.navigate(['/product/'+element.id]);
    
  }
  

}
