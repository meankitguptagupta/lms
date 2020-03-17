import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private _http:HttpClient) { }

  roles():Observable<APIResponse> {
    return this._http.get<APIResponse>('roles');
  }

  genere():Observable<APIResponse> {
    return this._http.get<APIResponse>('genere');
  }

  academyTypes():Observable<APIResponse> {
    return this._http.get<APIResponse>('academy_types');
  }
  
}
