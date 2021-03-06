import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  CarouselComponent,
  IvyCarouselModule,
} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatListModule } from '@angular/material/list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { MatDividerModule } from '@angular/material/divider';
import { SiginComponent } from './sigin/sigin.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { VentanaPestanasComponent } from './componentesAdmin/ventana-pestanas/ventana-pestanas.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ModificarProductoComponent } from './componentesAdmin/modificar-producto/modificar-producto.component';
import { ModificarUsuarioComponent } from './componentesAdmin/modificar-usuario/modificar-usuario.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatCheckboxDefaultOptions,
  MatCheckboxModule,
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './payment/success/success.component';
import { ModificarJuegoComponent } from './componentesAdmin/modificar-juego/modificar-juego.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { GestionarOfertasComponent } from './componentesAdmin/gestionar-ofertas/gestionar-ofertas.component';
import { MerchComponent } from './merch/merch.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CarruselComponent } from './ofertas-inicio/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    ProductComponent,
    ListProductsComponent,
    ShoppingCartComponent,
    LoginComponent,
    SiginComponent,
    VentanaPestanasComponent,
    ModificarProductoComponent,
    ModificarUsuarioComponent,
    ForgotpasswordComponent,
    PaymentComponent,
    SuccessComponent,
    ModificarJuegoComponent,
    RecuperarPasswordComponent,
    GestionarOfertasComponent,
    MerchComponent,
    ArticuloComponent,
    CarruselComponent,
  ],
  imports: [
    MatAutocompleteModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    NgbModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTabsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    NgxNumberSpinnerModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [MatFormFieldModule, MatInputModule],
})
export class AppModule {}
