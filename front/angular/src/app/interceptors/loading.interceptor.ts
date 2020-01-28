import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    activeReq:number = 0;

    constructor(private _loader:LoaderService) { }

    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        if (!this.activeReq) {
            this._loader.display(true);
        }

        this.activeReq++;

        return next.handle(req).pipe(
            finalize(() => {
                this.activeReq--;
                if(!this.activeReq) {
                    this._loader.display(false);
                }
            })
        )
    }
}