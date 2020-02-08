import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../../enums/role';

@Injectable({
  providedIn: 'root'
})
export class RoleRouteGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // check if defined role exists or not
      return (Object.values(Role).filter(role => { return typeof role === 'string' })).includes(next.paramMap.get('role'));
  }
  
}
