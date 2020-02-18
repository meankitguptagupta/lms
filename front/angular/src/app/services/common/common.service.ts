import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _route:Router, private _http:HttpClient) { }

  redirect (route:string):void {
      this._route.navigate([route]);
  }

  roles():Observable<APIResponse> {
    return this._http.get<APIResponse>('roles');
  }

  generes():Observable<APIResponse> {
    return this._http.get<APIResponse>('genere');
  }

  academyTypes():Observable<APIResponse> {
    return this._http.get<APIResponse>('academy_types');
  }
}
