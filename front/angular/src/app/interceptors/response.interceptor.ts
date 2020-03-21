import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification/notification.service';
import { NotificationType } from '../enums/notification-type';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private _notification:NotificationService) { }

    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event:HttpEvent<any>) => {
                if (event instanceof HttpResponse && (event.status === 200 || event.status === 201)) {
                    this._notification.displayNotification ({type:NotificationType.success, message: event.body.message});
                }
            }), catchError((err:HttpErrorResponse) => {
                if (err.status === 401) {
                
                }

                this._notification.displayNotification ({type:NotificationType.danger, message: err.error.message});
                return throwError (err.error || err.statusText);
            })
        )
    }
}
