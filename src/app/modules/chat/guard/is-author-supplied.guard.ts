import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from "../../../core/services/author.service";

@Injectable({
  providedIn: 'root'
})
export class IsAuthorSuppliedGuard implements CanActivate {

  constructor(
    private router: Router,
    private authorService: AuthorService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !!this.authorService.author || this.router.navigate(['']);
  }

}
