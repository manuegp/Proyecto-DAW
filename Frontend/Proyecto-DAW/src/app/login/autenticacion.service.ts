import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { error } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ Accept: 'application/json' });
  }

  login(email: string, password: string) {
    return this.http
      .post(
        'http://localhost:8000/api/tokens/create',
        { email: email, password: password },
        { headers: this.headers }
      )
      .pipe(
        map((datos) => {
          return datos;
        },
          )
      );
  }

  getIdUser(){
    if (localStorage.getItem("usuario")) {
      let user = JSON.parse(localStorage.getItem("usuario") || '{}')
      let idUser = user.id;
      
     return idUser;
    }else{
      return "";
    }
  }

  
}
