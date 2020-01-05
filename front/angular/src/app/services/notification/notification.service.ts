import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { NotificationMessage } from 'src/app/models/NotificationMessage';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notificationMessage: BehaviorSubject<NotificationMessage> = new BehaviorSubject<NotificationMessage>(null);

  constructor() { }

  displayNotification (notification:NotificationMessage) {
    this.notificationMessage.next(notification);
  }
}
