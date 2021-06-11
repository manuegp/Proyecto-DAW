import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessComponent } from './success/success.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [DatePipe],
})
export class PaymentComponent implements OnInit {
  //---------------------------------------------------------
  //---------Variables---------------------------------------
  //---------------------------------------------------------
  @ViewChild('paypal', { static: true })
  private paypalRef!: ElementRef;
  prueba: any;
  btncerrar: boolean = false;
  myDate: Date | undefined;
  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------

  //---------------------------------------------------------
  //--Constructor/Funciones de inicio del componente---------
  //---------------------------------------------------------
  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PaymentComponent>
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data.juegos);
    //Creo y configuro la ventana de paypal
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'Producto MMJ GAMES',
                amount: {
                  value: this.data.cantidad,
                  currency_code: 'EUR',
                },
              },
            ],
          });
        },

        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);

          this.block();
          console.log(this.btncerrar);
          //Aqui se usa la url para correo [Mario]
          this.enviarEmail();

          //AÃ±adir tabla ventas objetos vendidos [Manu]

          this.añadirVentas();

          //Eliminar carrito del usuario [Manu]
          this.eliminarCarrito();
        },
        onError: (error) => {
          console.log(error);
        },
      })
      .render(this.paypalRef.nativeElement);
  }
  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  block() {
    this.btncerrar = true;
  }

  cerrar() {
    this.dialogRef.close();
  }

  //Añado a la tabla ventas los articulos vendidos
  añadirVentas() {
    for (let i = 0; i < this.data.juegos.length; i++) {
      this.http
        .post('http://127.0.0.1:8000/api/ventas', {
          id_usuario: this.data.juegos[i].id_usuario,
          id_articulo: this.data.juegos[i].id_articulo,
          cantidad: this.data.juegos[i].cantidad,
        })
        .toPromise()
        .then((data: any) => {
          console.log(data);
          console.log(JSON.stringify(data.JSON));
        });
    }
  }

  //Elimino todo el carrito del usuario y abro el dialog de que la compra se ha hecho con exito
  eliminarCarrito() {
    for (let i = 0; i < this.data.juegos.length; i++) {
      this.http
        .delete('http://127.0.0.1:8000/api/carrito/' + this.data.juegos[i].id)
        .subscribe({
          next: (data) => {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = true;
            dialogConfig.closeOnNavigation = true;
            this.dialog.open(SuccessComponent, {
              panelClass: 'custom-dialog-container',
              disableClose: true,
            });
            this.dialog.afterAllClosed.subscribe((result) => {});
          },
        });
    }
  }

  //Envia peticion al sevidor para enviar el email de confirmacion
  enviarEmail() {
    if (this.getIdUser() != '') {
      let usuario = this.http
        .get('http://127.0.0.1:8000/api/usuarios/' + this.getIdUser())
        .subscribe((result) => {
          this.prueba = result;
          this.http
            .get(
              'http://127.0.0.1:8000/api/email_pago/' + this.prueba.data.email
            )
            .subscribe();
        });
    }
  }

  //Consigo el id del usuario del localstorage
  getIdUser() {
    if (localStorage.getItem('usuario')) {
      let user = JSON.parse(localStorage.getItem('usuario') || '{}');
      console.log(user.id);
      return user.id;
    } else {
      return '';
    }
  }
}
