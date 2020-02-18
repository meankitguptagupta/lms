import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from 'src/app/models/signup';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/models/api-response';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  signup(user:Signup):Observable<APIResponse> {
    console.log(user)
    return this._http.post<APIResponse>('signup', user);
  }

  login(user:Login):Observable<APIResponse> {
    return this._http.post<APIResponse>('login', user);
  }
}
