import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification/notification.service';
import { NotificationType } from '../enums/notification-type';
import { AuthService } from '../services/auth/auth.service';
import { UtilityService } from '../services/utility/utility.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(
        private _notification:NotificationService,
        private _auth:AuthService,
        private _utility:UtilityService
    ) { }

    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event:HttpEvent<any>) => {
                if (event instanceof HttpResponse && ([200, 201].includes(event.status))) {
                    this._notification.displayNotification ({type:NotificationType.success, message: event.body.message});
                }
            }), catchError((err:HttpErrorResponse) => {
                this._notification.displayNotification ({type:NotificationType.danger, message: err.error.message});

                if (err.status === 401) {
                    this._auth.logout();
                    this._utility.redirect('login');
                }
                
                return throwError (err.error || err.statusText);
            })
        )
    }
}
