import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from 'src/app/models/api-response';
import { Login } from 'src/app/models/definations/login';
import { Signup } from 'src/app/models/definations/signup';
import { ForgotPassword } from 'src/app/models/definations/forgot-password';

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

  forgotPassword(forgotpassword:ForgotPassword):Observable<APIResponse> {
    return this._http.post<APIResponse>('forgot-password', forgotpassword);
  }
}
