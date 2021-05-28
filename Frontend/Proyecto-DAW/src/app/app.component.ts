import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'Proyecto-DAW';

  myControl = new FormControl();
  options: any;
  

  constructor(private router:Router,
    private dialog: MatDialog,
    private http: HttpClient,
    ){
      
    }

    ngOnInit(): void {
      this.getArticulos()
      this.comprobarUsuario()
      
    }


    ngAfterViewInit(): void {
      
    }
  
  redirigir(){
    this.router.navigate(['profile']);

  }
  asignarArticulos(dato : any){
    this.options = dato.data;
  }
  
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
      this.dialog.open(LoginComponent, { panelClass: 'custom-dialog-container' });
  }
  
  getArticulos() {
    this.http.get('http://127.0.0.1:8000/api/articulos').subscribe((result) => {
      this.asignarArticulos(result)
      
    });
  }

  redirigirArticulo(id: any){
    console.log("redirigiendo a "+ id)
    window.location.href ="product/"+ id;
  }

  

  comprobarUsuario(){
    if (localStorage.getItem("usuario")) {
      console.log("Estas loggeado");
      
    }else{
      console.log("No estas loggeado");
    }
  

    
  }
  cerrarSesion(){
    localStorage.removeItem("usuario")
  }

}



