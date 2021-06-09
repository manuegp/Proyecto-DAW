import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent implements OnInit {
  id: any;
  datos: any;
  esTipo: string = '';
  Articulos: any;
  constructor(private _ac: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerID();
    this.conseguirTotalArticulos();
  }

  obtenerID() {
    this._ac.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.id = id;
    });
  }

  conseguirTotalArticulos() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos')
      .toPromise()
      .then((data) => {
        this.Articulos = data;
        this.Articulos = this.Articulos.data;
        console.log(this.Articulos);
        this.comprobarArticulo();
      });
  }
  verArticulo() {
    console.log(this.Articulos);
    console.log( this.Articulos[1].id)
    for (let i = 0; i < this.Articulos.length; i++) {
      console.log( this.Articulos[i].id)
      if(this.id == this.Articulos[i].id){
        
        return true
      }
      
    }
    return false
  }

  comprobarArticulo() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos/juego/' + this.id)
      .toPromise()
      .then((data) => {
        this.datos = data;
        if (this.verArticulo()) {
          if (this.datos.length == 0) {
            console.log('Es merch');
            this.esTipo = 'merch';
          } else {
            console.log('Es juego');
            this.esTipo = 'juego';
          }
        } else {
          console.log('Primo te has pasado');
          this.esTipo = 'error';
          window.location.href="home"
        }
      });
  }
}
