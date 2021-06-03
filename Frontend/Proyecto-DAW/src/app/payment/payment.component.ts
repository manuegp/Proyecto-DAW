import { style } from '@angular/animations';
import { viewClassName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  constructor() {}

  totalPagar : number = 12;
  ngOnInit(): void {
    window.paypal
      .Buttons({
        

        createOrder: (data , actions) =>{
          return actions.order.create({
            purchase_units:[
              {
                description: "Producto MMJ GAMES",
                amount:{
                  value: this.totalPagar,
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
