import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
})
export class CarruselComponent {
  //Variable
  ofertas: any;

  //Constructor
  constructor(private http: HttpClient, private router: Router) {
    this.conseguirTotalOfertas();
  }

  //Conseguir todas las ofertas
  conseguirTotalOfertas() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos/oferta')
      .toPromise()
      .then((data) => {
        this.ofertas = data;
      });
  }

  ngOnInit(): void {}

  //Redirigir al producto de la card
  redirigir(element: any) {
    this.router.navigate(['/product/' + element.id]);
  }
}
