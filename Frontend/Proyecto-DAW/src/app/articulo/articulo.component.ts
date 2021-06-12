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

  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  
  id: any; //Id de la URL
  datos: any; //Datos del juego de la pagina;
  esTipo: string = ''; //El tipo de producto de la id de la URL
  Articulos: any; //Todos los articulos

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(private _ac: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerID(); //Obtengo el ID de la URL
    this.conseguirTotalArticulos(); //Obtengo todos los articulos
  }

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Obtengo el id del producto de la URL
  obtenerID() {
    this._ac.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.id = id;
    });
  }

  //Coger toodos los articulos de la BBDD
  conseguirTotalArticulos() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos') //--->Llamada a la url
      .toPromise()
      .then((data) => {
        this.Articulos = data;
        this.Articulos = this.Articulos.data; //Asigno todos los articulos
        this.comprobarArticulo();
      });
  }

  //Compruebo que el articulo de la URL exista en la BBDD y compruebo tambien que tipo es juego/merch para cargar el componente adecuado
  comprobarArticulo() {
    this.http
      .get('http://127.0.0.1:8000/api/articulos/juego/' + this.id) //Traigo los juegos
      .toPromise()
      .then((data) => {
        this.datos = data;
        if (this.verArticulo()) {
          //TRUE: el articulo esta en la BBDD y se mira que tipo es; FALSE: devuelve a /home
          if (this.datos.length == 0) {
            //Si el id no se encuentra en la tabla juegos devolvera una array con length 0 haciendo que sea merch
            this.esTipo = 'merch';
          } else {
            this.esTipo = 'juego'; //Si el id  se encuentra en la tabla juegos devolvera una array con datos haciendo que sea juegos
          }
        } else {
          this.esTipo = 'error';
          window.location.href = 'home';
        }
      });
  }

  //Compruebo si el id de la URL introducida se encuentra entre los articulos de la BBDD
  verArticulo() {
    for (let i = 0; i < this.Articulos.length; i++) {
      if (this.id == this.Articulos[i].id) {
        //Coinciden los Id
        return true;
      }
    }
    return false;
  }
}
