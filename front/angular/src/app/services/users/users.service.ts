import { Injectable } from '@angular/core';
import { Signup } from 'src/app/models/forms/signup';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/forms/login';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

  signup(user:Signup):Observable<any> {
    return this._http.post('/signup', user)
  }

  login(user:Login):Observable<any> {
    return this._http.post('/login', user)
  }
}
