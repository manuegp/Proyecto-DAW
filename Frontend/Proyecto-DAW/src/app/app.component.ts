import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {startWith, map} from 'rxjs/operators';
import { AutenticacionService } from './login/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'Proyecto-DAW';
  idUser : any ;
  logState: boolean = false;
  esAdmin: boolean = false;

  constructor(private router:Router,
    private dialog: MatDialog,
    private http: HttpClient,
    private autenticacionServe:AutenticacionService

    ){
      
    }

    ngOnInit(): void {
      
     this.idUser= this.autenticacionServe.getIdUser()
     console.log(this.logState)
      if(this.idUser.id == undefined){
        this.logState = true
      }
      
    this.comprobarAdmin()
    }


    ngAfterViewInit(): void {
      
    }
  
  redirigir(){
    this.router.navigate(['profile']);

  }
  
  
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(LoginComponent, { panelClass: 'custom-dialog-container' });
    this.dialog.afterAllClosed.subscribe((result) => {
      window.location.reload()
    });
  }
  
  cerrarSesion(){
    localStorage.removeItem("usuario")
    window.location.href ="home";
  }

  gestion(){  
    window.location.href ="admin";
  }

  comprobarAdmin(){
    if(this.idUser.administrador != 0){
      this.esAdmin = true;
    }
  }

  irCarrito(){
    window.location.href ="shopping-cart";
  }
}



