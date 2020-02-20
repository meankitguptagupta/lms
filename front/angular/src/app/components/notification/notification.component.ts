import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification';
import { NotificationService } from 'src/app/services/notification/notification.service';

import { ToastAnimation } from './toast-animation';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [ToastAnimation]
})
export class NotificationComponent implements OnInit {

  notification:Notification;
  toastState:string = 'hide';

  constructor(private _notification:NotificationService) { }

  ngOnInit() {
    this._notification.notificationMessage.subscribe((notification:Notification) => {
      this.notification = notification;
    })
  }

  hideNotification():void {
    this.notification = null;
  }
  
  toggleToast() {
    if (this.toastState == 'hide') {
      this.toastState = 'show';
    } else {
      this.toastState = 'hide';
    }
  }

}
