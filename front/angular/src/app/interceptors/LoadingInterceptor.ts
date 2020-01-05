import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    activeRequests:number = 0;

    constructor(private _loader:LoaderService) {}

    intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        if(!this.activeRequests){
            this._loader.displayLoader(true);
        }

        this.activeRequests++;

        return next.handle(req).pipe(
            finalize(() => {
                this.activeRequests--;
                if (this.activeRequests === 0) {
                    this._loader.displayLoader(false);
                }
            })
        );
    }
}