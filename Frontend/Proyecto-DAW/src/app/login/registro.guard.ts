import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroGuard implements CanActivate {

  //---------------------------------------------------------
  //--Constructor---------
  //---------------------------------------------------------
  constructor(private router: Router) { }

  //---------------------------------------------------------
  //---------Funciones---------------------------------------
  //---------------------------------------------------------

  //Funcion que utilizo en el fichero app-routing.module.ts para acceder a la ruta register
  //en caso de que el localStorage de usuario no exista, es decir que no se haya loggeado el usuario.
  //Si esta loggeado, le redirigira al home
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!localStorage.getItem("usuario")) {
      return true;
    } else {
      this.router.navigate(['/home'], { queryParams: { urlRespuesta: state.url } });
      return false

    }

  }

}
