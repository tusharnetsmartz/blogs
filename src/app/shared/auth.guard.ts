import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private router:Router
  ){}
  canActivate(): boolean {
      const token = localStorage.getItem('token');
      if(token !== null){
        return true;
      }else{
        this.router.navigate(['/auth/login']);
        return false;
      }
  }
  
}
