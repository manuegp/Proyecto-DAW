import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  //---------------------------------------------------------
  //--Constructor---------
  //---------------------------------------------------------
  constructor(private router: Router) { }

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Funcion que utilizo en el fichero app-routing.module.ts para acceder a las ruta admin
  //en caso de que el usuario que ha inicidado sesion sea administrador.
  //Si no es administrador, le redirigira al home
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem("usuario")) {
      let user = JSON.parse(localStorage.getItem("usuario") || '{}')
      if (user.administrador == 1) {
        return true
      } else {
        this.router.navigate(['/home'], { queryParams: { urlRespuesta: state.url } });
        return false

      }
    }

    this.router.navigate(['/home'], { queryParams: { urlRespuesta: state.url } });
    return false;

  }

}