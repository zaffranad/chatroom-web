import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "../../../core/services/login.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoginSuppliedGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isValid() || this.router.navigate(['']);
  }

}
