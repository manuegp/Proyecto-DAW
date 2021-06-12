import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationProfileGuard implements CanActivate {

  //---------------------------------------------------------
  //--Constructor---------
  //---------------------------------------------------------
  constructor(private router: Router) { }

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Funcion que utilizo en el fichero app-routing.module.ts para acceder a las rutas profile y shopping-cart
  //en caso de que exista un localStorage de usuario, es decir en caso de que el usuario haya iniciado sesion.
  //Si no ha iniciado sesion, le redirigira al home
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem("usuario")) {
      return true;



    } else {
      this.router.navigate(['/home'], { queryParams: { urlRespuesta: state.url } });
      return false

    }
  }

}
