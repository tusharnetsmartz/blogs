import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard {
  constructor(private router: Router,
    private sharedService: SharedService) {     
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('token') === null){
        this.sharedService.userLoggedIn();
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
  }
  
}
