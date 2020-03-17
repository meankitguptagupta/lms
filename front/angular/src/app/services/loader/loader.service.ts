import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public status:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  // update status of the loader
  display(status:boolean):void {
    this.status.next(status);
  }
}
