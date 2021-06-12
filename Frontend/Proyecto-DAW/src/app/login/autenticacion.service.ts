import {
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {

  //---------------------------------------------------------
  //--Constructor---------
  //---------------------------------------------------------
  constructor(private http: HttpClient) { }


  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Esta funcion se encarga de recoger los parametros que necesitara para 
  //ejecutar la funcion que tiene esa ruta en laravel, la cual consiste en comprobar si el email y la contraseña son correctas
  //En caso de que si, devolvera los datos que hay especificos en esa funcion
  login(email: string, password: string) {

    return this.http
      .post(
        'http://localhost:8000/api/tokens/create',
        { email: email, password: password }
      )
      .pipe(
        map((datos) => {
          return datos;
        },
        )
      );
  }

  //Esta funcion comprueba si existe el localStorage de usuario. En caso de que si devolvera
  //los datos que tiene; y en caso de que no, devolvera vacio
  getIdUser() {
    if (localStorage.getItem("usuario")) {
      let user = JSON.parse(localStorage.getItem("usuario") || '{}')
      let User = user;

      return User;
    } else {
      return "";
    }
  }


}
