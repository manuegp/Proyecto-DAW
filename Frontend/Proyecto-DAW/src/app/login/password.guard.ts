import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordGuard implements CanActivate {
  constructor (private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (localStorage.getItem("password")) {
        return true;
        
       
        
      }else{
      this.router.navigate(['/home'], {queryParams:{urlRespuesta:state.url}});
      console.log("No estas loggeado");
      return false
      
      }

  }
  
}
