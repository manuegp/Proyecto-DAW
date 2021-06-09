import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
safeUrl: any;
ofertas: any;
  constructor(private _sanitizer: DomSanitizer, private http: HttpClient
    ) {this.conseguirTotalOfertas() }

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl( 'https://www.youtube.com/embed/UAO2urG23S4');
    
  }

  conseguirTotalOfertas(){
    this.http.get('http://127.0.0.1:8000/api/articulos/oferta_administrador').toPromise().then(data =>{
           console.log(data)
           this.ofertas= data
           console.log(this.ofertas)
        })
     }

     redirigirDestacado(){
   
      window.location.href="/product/1";
      
    }
  
}
