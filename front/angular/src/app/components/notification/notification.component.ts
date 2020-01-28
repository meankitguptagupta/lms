import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification:Notification;

  constructor(private _notification:NotificationService) { }

  ngOnInit() {
    this._notification.notificationMessage.subscribe((notification:Notification) => {
      this.notification = notification;
    })
  }

}
