import { Injectable } from '@angular/core';
import { Signup } from 'src/app/models/forms/signup';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

  signup(user:Signup):Observable<any> {
    return this._http.post('/signup', user)
  }
}
