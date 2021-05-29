import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AutenticacionService } from '../login/autenticacion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  idUser: any;
 
  userData: any;
  signupForm: FormGroup;

  constructor(
    private autenticacionServe:AutenticacionService,
    private http: HttpClient,
    private _builder : FormBuilder,
    
  )  {
    
    
     this.esperarConstruccion()
    console.log(this.userData)

    this.signupForm = this._builder.group({
      username:[],
      nombre: [],
      apellidos:[],
      email:[],
      telefono:[]
      
    })
    
    
    
  
  }

  esperarConstruccion() {
    console.log("Entered second function");
    return new Promise(resolve => {
        setTimeout(() => {
        resolve("\t\t This is second promise");
        this.construir();
        }, 1000);
    });
    };

    construir(){
      this.signupForm = this._builder.group({
        username:[ this.userData.data.nick, Validators.required],
        nombre: [ this.userData.data.nombre, Validators.required],
        apellidos:[ this.userData.data.apellidos, Validators.required],
        email:[ this.userData.data.email, Validators.required, ],
        telefono:[ this.userData.data.telefono,Validators.required],
      })
    }
  ngOnInit(): void {
    
    this.asignarDatos()
    
  }


 

    private async asignarDatos(){
      this.idUser = this.autenticacionServe.getIdUser()
      const data = await this.http.get('http://127.0.0.1:8000/api/usuarios/'+this.idUser).toPromise();
      this.userData = data; 
    }

    submit(evento :any){
     
        console.log
       this.http.put("http://127.0.0.1:8000/api/usuarios/"+ this.idUser,{
         nombre: this.signupForm.controls['nombre'].value,
         apellido:this.signupForm.controls['apellidos'].value  ,
         nick: this.signupForm.controls['username'].value ,
         telefono: this.signupForm.controls['telefono'].value,
         email:this.signupForm.controls['email'].value,
         
         }).toPromise().then((data:any) => {
           console.log(data)
           console.log(JSON.stringify(data.JSON))
           
         })
       
       
    }
  
  }
