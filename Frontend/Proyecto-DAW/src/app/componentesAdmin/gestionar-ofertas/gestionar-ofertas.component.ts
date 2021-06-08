import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-gestionar-ofertas',
  templateUrl: './gestionar-ofertas.component.html',
  styleUrls: ['./gestionar-ofertas.component.css']
})
export class GestionarOfertasComponent implements OnInit {
  @ViewChild('articulo') articuloSelect: any;

   @ViewChild('percent') porciento: any;
  stateCtrl = new FormControl();
  filteredStates: Observable<any[]> | undefined;
idOG: any;
precioOg: any;
  states: any[] =[];
  getArticulos(){
    this.http.get('http://127.0.0.1:8000/api/articulos').toPromise()
    .then((data: any) => {
      this.states = data.data
      this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
    });
  }
  constructor(private dialogRef: MatDialogRef<GestionarOfertasComponent> ,private http: HttpClient, private _builder: FormBuilder,
    ) {
    this.getArticulos()
    
  }


  ngOnInit(): void {
    
  }

  private _filterStates(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.nombre.toLowerCase().indexOf(filterValue) === 0);
  }

  cancelar() {
    
  }

  getIdfromArticulo(articulo: any){
    for (let i = 0; i < this.states.length; i++) {
        if(this.states[i].nombre === articulo){
             this.idOG =this.states[i].id
             this.precioOg =this.states[i].precio
        }
    }
  }
  submit(){
   console.log(this.states)
   let porciento=  this.porciento.nativeElement.value
   let articulo = this.articuloSelect.nativeElement.value
   
   this.getIdfromArticulo(articulo)
   //Aqui se envia servidor
  
   this.http.post("http://127.0.0.1:8000/api/ofertas",{
        id_articulo: this.idOG,
        precio_original: this.precioOg,
        porcentaje: porciento
    }).toPromise().then((data:any) => {
      console.log(data)
      console.log(JSON.stringify(data.JSON))
      this.dialogRef.close();

    }) 
  }
}
