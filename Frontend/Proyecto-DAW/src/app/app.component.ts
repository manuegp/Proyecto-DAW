import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Proyecto-DAW';

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  
}

