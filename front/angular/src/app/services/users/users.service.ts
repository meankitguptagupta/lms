import { Injectable } from '@angular/core';
import { Signup } from 'src/app/models/forms/signup';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/forms/login';
import { APIResponse } from 'src/app/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

  signup(user:Signup):Observable<APIResponse> {
    return this._http.post<APIResponse>('/signup', user)
  }

  login(user:Login):Observable<APIResponse> {
    return this._http.post<APIResponse>('/login', user)
  }
}
