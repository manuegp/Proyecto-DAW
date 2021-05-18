import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent  } from './profile/profile.component';
import { AdminComponent  } from './admin/admin.component';
import { ListProductsComponent  } from './list-products/list-products.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent  } from './shopping-cart/shopping-cart.component';
import { SiginComponent  } from './sigin/sigin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'product/ :id', component: ProductComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'register', component: SiginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

}
