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
usuarios:any;
  states: any[] =[];
  error: boolean= false;
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
             
             return this.states[i].id
        }
    }
    return null
  }

   ConvertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
}
  submit(){
    
   console.log(this.states)
   let porciento=  this.porciento.nativeElement.value
   let articulo = this.articuloSelect.nativeElement.value
   console.log(porciento)
   this.idOG = this.getIdfromArticulo(articulo)
   console.log(this.idOG)
    porciento= this.ConvertStringToNumber(porciento)
   console.log(porciento)
  
   //Aqui se envia servidor
  if( porciento > 0 && porciento < 100 && this.idOG != null){
    
    console.log("pasa")
   this.http.put("http://127.0.0.1:8000/api/ofertas/"+ this.idOG,{
        
        porcentaje: porciento
    }).toPromise().then((data:any) => {
      console.log(data)
      console.log(JSON.stringify(data.JSON))
      this.dialogRef.close();
      this.http.get("http://127.0.0.1:8000/api/usuarios/articulo_deseado_oferta/" + this.idOG).subscribe((result) => {

          this.usuarios = result;

          for (let i = 0; i < this.usuarios.length; i++) {

            this.http.get("http://127.0.0.1:8000/api/email_ofertas/" + this.usuarios[i].email + "/" + this.idOG).subscribe();

          }

          window.location.reload();

        });

    })
    
    
  }else{
    console.log("error")
    this.error= true
  }
  
}
}
