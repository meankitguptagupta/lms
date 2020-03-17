import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PublicService } from 'src/app/services/public/public.service';
import { map, catchError } from 'rxjs/operators';
import { APIResponse } from 'src/app/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private _public:PublicService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._public.roles().pipe(map((res:APIResponse) => {
              return Object.values(res.data).includes(next.paramMap.get('role'))
            }), catchError((err:APIResponse) => {
              return of(false);
            }));
  }
  
}
