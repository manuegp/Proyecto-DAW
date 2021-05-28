import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  headers:HttpHeaders;

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({"Accept": "application/json"});
  }


  login(email:string, password:string) {
    return this.http.post('http://localhost:8000/api/tokens/create', {email:email, password:password}, {headers:this.headers}).pipe(map(datos=>{return datos}));
  }

}
