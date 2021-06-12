import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordGuard implements CanActivate {

  //---------------------------------------------------------
  //--Constructor---------
  //---------------------------------------------------------
  constructor(private router: Router) { }

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Funcion que utilizo en el fichero app-routing.module.ts para acceder a la ruta recuperar-password
  //en caso de que el usuario que ha inicidado sesion tenga el localStorage password.
  //Si no existe el localStorage password, le redirigira al home
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem("password")) {
      return true;



    } else {
      this.router.navigate(['/home'], { queryParams: { urlRespuesta: state.url } });
      return false

    }

  }

}
