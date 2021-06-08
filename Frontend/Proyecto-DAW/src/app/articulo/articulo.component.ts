import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  id :any;
  datos: any;
  esTipo:string = "";
  lengthArticulos: any;
  constructor(private _ac: ActivatedRoute,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.obtenerID();
    this.conseguirTotalArticulos()
    
  }


  obtenerID(){
    this._ac.paramMap.subscribe(params => {
      const id = params.get('id')
      this.id = id;
      
    })
  }

 conseguirTotalArticulos(){
this.http.get('http://127.0.0.1:8000/api/articulos').toPromise().then(data =>{
       this.lengthArticulos= data
       this.lengthArticulos= this.lengthArticulos.data.length
      console.log(this.lengthArticulos)
      this.comprobarArticulo();
    })
 }
  
  
  comprobarArticulo(){
    
      this.http.get('http://127.0.0.1:8000/api/articulos/juego/'+this.id).toPromise().then(data =>{
       this.datos= data
       if(this.id <= this.lengthArticulos){
       if(this.datos.length == 0 ){
        console.log("Es merch")
        this.esTipo= "merch"
      }else{
        console.log("Es juego")
        this.esTipo= "juego"
      }
      
    }else{
      console.log("Primo te has pasado")
      this.esTipo= "error"
      window.location.href="home"
    }

    })
      
    
  }

}
