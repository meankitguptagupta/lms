import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _route:Router) { }

    redirect (route:string):void {
        this._route.navigate([route]);
    }
}
