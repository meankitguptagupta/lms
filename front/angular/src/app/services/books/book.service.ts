import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/models/forms/api-response';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http:HttpClient) { }

  generes():Observable<APIResponse> {
    return this._http.get<APIResponse>('genere');
  }

  academyTypes():Observable<APIResponse> {
    return this._http.get<APIResponse>('academy_types');
  }
}
