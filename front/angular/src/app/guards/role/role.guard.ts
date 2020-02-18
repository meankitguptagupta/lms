import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommonService } from 'src/app/services/common/common.service';
import { map, catchError } from 'rxjs/operators';
import { APIResponse } from 'src/app/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private _common:CommonService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._common.roles().pipe(map((res:APIResponse) => {
              return Object.values(res.data).includes(next.paramMap.get('role'))
            }), catchError((err:APIResponse) => {
              return of(false);
            }));
  }
  
}