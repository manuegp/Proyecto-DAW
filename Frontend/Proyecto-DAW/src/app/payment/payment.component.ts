import { style } from '@angular/animations';
import { viewClassName } from '@angular/compiler';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Button } from 'selenium-webdriver';
declare var paypal;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  @ViewChild('paypal', { static: true })
  private paypalRef!: ElementRef;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  
  ngOnInit(): void {
    console.log(this.data)
    window.paypal
      .Buttons({
        

        createOrder: (data , actions) =>{
          return actions.order.create({
            purchase_units:[
              {
                description: "Producto MMJ GAMES",
                amount:{
                  value: this.data.cantidad,
                  currency_code: 'EUR'
                }
              }
            ]
          })
        },

        onApprove: async (data , actions) =>{
          const order = await actions.order.capture();
          console.log(order);
          alert("Pago hecho")
          //Aqui se usa la url para correo [Mario]
          //Eliminar carrito del usuario [Manu]
          //Añadir tabla ventas objetos vendidos [Manu]
         
        },
        onError: error =>{
          console.log(error)
        }
      })
      .render(this.paypalRef.nativeElement);
  }
}
