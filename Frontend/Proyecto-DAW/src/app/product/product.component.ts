import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  panelOpenState = false;
  data : any;
  constructor(private _ac: ActivatedRoute,
              private http: HttpClient) { }
  
  id :any;

  obtenerArticulos() {
    this.http.get('http://127.0.0.1:8000/api/articulos/'+this.id).subscribe(result => {
      this.asignarArticulos(result)
    });
  }

  asignarArticulos(dato : any){
    this.data = dato;
  }

  obtenerID(){
    this._ac.paramMap.subscribe(params => {
      const id = params.get('id')
      this.id = id;
      
    })
  }
  ngOnInit(): void {
    this.obtenerID();
    this.obtenerArticulos();
    console.log(this.data);
    console.log(this.id)
  }

  ngAfterViewInit(): void {
    console.log(this.data.data.imagen_principal)
  }

  compre(){
    console.log(this.data)
  }
}
