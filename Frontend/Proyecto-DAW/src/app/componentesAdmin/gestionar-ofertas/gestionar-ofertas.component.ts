import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-gestionar-ofertas',
  templateUrl: './gestionar-ofertas.component.html',
  styleUrls: ['./gestionar-ofertas.component.css'],
})
export class GestionarOfertasComponent implements OnInit {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  @ViewChild('articulo') articuloSelect: any; //Observo input
  @ViewChild('percent') porciento: any;//Observo input
  articuloCtrl = new FormControl(); //Formulario
  filteredArticulos: Observable<any[]> | undefined; //Articulos filtrados
  idOG: any;  //Id del articulo seleccionado
  usuarios: any;
  articulos: any[] = [];
  error: boolean = false; //En caso de que los datos sean invalidos sera true

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private dialogRef: MatDialogRef<GestionarOfertasComponent>,
    private http: HttpClient
  ) {
    this.getArticulos(); //Pido los articulos
  }

  ngOnInit(): void {}

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  getArticulos() {
    //Obtengo los articulos y los por un a funcion para que al escribir se filtren por nombre
    this.http
      .get('http://127.0.0.1:8000/api/articulos')
      .toPromise()
      .then((data: any) => {
        this.articulos = data.data;
        this.filteredArticulos = this.articuloCtrl.valueChanges.pipe(
          startWith(''),
          map((articulo) =>
            articulo ? this._filterArticulos(articulo) : this.articulos.slice()
          )
        );
      });
  }

  cancelar() {
    //Cierro el dialogo
    this.dialogRef.close();
  }

  getIdfromArticulo(articulo: any) {
    //Devuelvo el id del articulo del valor (nombre) del input 'articulo' comparandolo con los articulos de la BBDD
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].nombre === articulo) {
        return this.articulos[i].id;
      }
    }
    return null; //El input esta vacio
  }

  ConvertStringToNumber(input: string) {
    //Esta funcion convierte un string a numero
    var numeric = Number(input);
    return numeric;
  }

  submit() {
    //Cojo el porciento y  el articulo de los input
    let porciento = this.porciento.nativeElement.value;
    let articulo = this.articuloSelect.nativeElement.value;

    //Extraigo el id del articulo y con convierto el value de porcentaje del input a number
    this.idOG = this.getIdfromArticulo(articulo);
    porciento = this.ConvertStringToNumber(porciento);

    //Conpruebo que el porciento este entre 0 y 100 y que se haya cogido un ID
    if (porciento > 0 && porciento < 100 && this.idOG != null) {
      this.http
        .put('http://127.0.0.1:8000/api/ofertas/' + this.idOG, {
          //Actualizo tabla ofertas con el id
          porcentaje: porciento,
        })
        .toPromise()
        .then((data: any) => {
          this.dialogRef.close();
          this.http
            .get(
              'http://127.0.0.1:8000/api/usuarios/articulo_deseado_oferta/' +
                this.idOG
            )
            .subscribe((result) => {
              this.usuarios = result;

              for (let i = 0; i < this.usuarios.length; i++) {
                this.http
                  .get(
                    'http://127.0.0.1:8000/api/email_ofertas/' +
                      this.usuarios[i].email +
                      '/' +
                      this.idOG
                  )
                  .subscribe();
              }

              
            });
        });
    } else {
      this.error = true;
    }
  }

  _filterArticulos(value: string): any[] {
    //Se filtran los articulo que se escribe en el input de 'articulo' por nombre
    const filterValue = value.toLowerCase();

    return this.articulos.filter(
      (state) => state.nombre.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
