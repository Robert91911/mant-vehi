import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@app/pages/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoguedGuard implements CanActivate {

  constructor(private authSrv: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userId = JSON.parse(localStorage.getItem('user')) || null;
    if (userId == null) {
      return this.router.createUrlTree(
        ['/login']
        // { skipLocationChange: true }
      );
    } else {
      return true;
    }
  }
  
}
