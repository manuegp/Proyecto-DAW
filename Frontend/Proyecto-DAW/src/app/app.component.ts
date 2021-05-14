import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Proyecto-DAW';

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private router:Router){}
  
  redirigir(){
    this.router.navigate(['profile']);

  }
}