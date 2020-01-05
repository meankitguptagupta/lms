import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor (private _auth:AuthService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    let headers = {};

    // // check if user already login
    if (this._auth.islogin()) {
      headers = {Authorization: this._auth.getToken()};
    }

    return next.handle (req.clone ({
      setHeaders : headers
    }));
  }
}