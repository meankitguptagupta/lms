import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationMessage:BehaviorSubject<Notification> = new BehaviorSubject<Notification>(null);

  constructor() { }

  displayNotification(notification:Notification):void {
    this.notificationMessage.next(notification);
  }
  
}
