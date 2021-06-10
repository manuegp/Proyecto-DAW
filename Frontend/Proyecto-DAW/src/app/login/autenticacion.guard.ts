import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor (private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (localStorage.getItem("usuario")) {
        let user = JSON.parse(localStorage.getItem("usuario") || '{}')
        console.log(user.administrador);
        if(user.administrador== 1){
          return true
        }else{
          this.router.navigate(['/home'], {queryParams:{urlRespuesta:state.url}});
          return false

        }
      }

      this.router.navigate(['/home'], {queryParams:{urlRespuesta:state.url}});
      console.log("No estas loggeado");

      return false;

  }

}