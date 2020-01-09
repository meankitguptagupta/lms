import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { CommonService } from '../services/common/common.service';
import { NotificationService } from '../services/notification/notification.service';
import { NotificationMessage } from '../models/NotificationMessage';
import { APIResponse } from '../models/api-response';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(
        private _auth:AuthService, 
        private _common:CommonService, 
        private _notification:NotificationService
    ) {}

    intercept (req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<APIResponse>> {
        let notification:NotificationMessage;

        return next.handle (req).pipe (tap((event:HttpEvent<any>) => {
            if (event instanceof HttpResponse && (event.status === 200 || event.status === 201)) {
                notification = {message: event.body.message, type: 'success'};
                this._notification.displayNotification (notification);
            }
        }), catchError((err:HttpErrorResponse) => {
            if (err.status === 401) {
                this._auth.logout();
                this._common.redirect('login');
            } 
            notification = {message: err.error.error, type: 'danger'};
            this._notification.displayNotification (notification);
      
      return throwError (err.error || err.statusText);
    }));
  }

}