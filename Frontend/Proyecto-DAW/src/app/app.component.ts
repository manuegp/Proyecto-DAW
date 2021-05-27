import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Proyecto-DAW';

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private router:Router,
    private dialog: MatDialog,
    ){}

    ngOnInit(): void {
      
      
    }

  redirigir(){
    this.router.navigate(['profile']);

  }

  
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
      this.dialog.open(LoginComponent, { panelClass: 'custom-dialog-container' });
  }



}


