import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signup } from 'src/app/models/forms/signup';
import { APIResponse } from 'src/app/models/forms/api-response';
import { Login } from 'src/app/models/forms/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  signup(user:Signup):Observable<APIResponse> {
    return this._http.post<APIResponse>('signup', user);
  }

  login(user:Login):Observable<APIResponse> {
    return this._http.post<APIResponse>('login', user);
  }
}
