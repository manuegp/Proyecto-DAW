import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModificarProductoComponent } from 'src/app/componentesAdmin/modificar-producto/modificar-producto.component';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';



export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-ventana-pestanas',
  templateUrl: './ventana-pestanas.component.html',
  styleUrls: ['./ventana-pestanas.component.css']
})


export class VentanaPestanasComponent implements OnInit{

  modificar(event :any){
      console.log("modificando")
      const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
      this.dialog.open(ModificarProductoComponent, { panelClass: 'custom-dialog-container' , 
      data:{
            nombre: event.nombre,
            descripcion: event.descripcion,
            precio: event.precio,
            fecha_salida: event.fecha_salida
      }});
      
  }
  

  constructor(private dialog: MatDialog,
              private http : HttpClient,
              
              ) {}            
  
 ELEMENT_DATA: any;
 displayedColumns: string[] = ['Nombre', 'Descripcion', 'Precio', 'Fecha', 'Modificar'];
 dataSource: any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
    
    
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  asignar :any;

  asignarDatos(){
    
    this.http.get("http://127.0.0.1:8000/api/articulos").subscribe(
          result  => {
            this.asignar = result;
            this.dataSource = new MatTableDataSource(this.asignar.data);
            this.dataSource.paginator = this.paginator;
        })
    

    
    
    
    
  }
  
  ngOnInit(): void {
    this.asignarDatos()
    
    

    }

    
}


export interface articulo {
  nombre: string;
  descripcion: number;
  precio: number;
  fecha: any;
}


