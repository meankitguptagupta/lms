import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        return next.handle(req.clone({
            url: `${this.getBaseUrl()}${req.url}`
        }))
    }

    getBaseUrl():string {
        return environment.apiUrl;
    }
}