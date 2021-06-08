import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent  } from './profile/profile.component';
import { AdminComponent  } from './admin/admin.component';
import { ListProductsComponent  } from './list-products/list-products.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent  } from './shopping-cart/shopping-cart.component';
import { SiginComponent  } from './sigin/sigin.component';
import { AutenticacionGuard } from './login/autenticacion.guard';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { ArticuloComponent } from './articulo/articulo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AutenticacionGuard]  },
  { path: 'products', component: ListProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'product/:id', component: ArticuloComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'register', component: SiginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

}
