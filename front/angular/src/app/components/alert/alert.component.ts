import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { NotificationMessage } from 'src/app/models/NotificationMessage';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private _notification:NotificationService) { }

  notification:NotificationMessage;

  ngOnInit() {
    this._notification.notificationMessage.subscribe((notification:NotificationMessage) => {
      this.notification = notification;
    });
  }

  close():void {
    this.notification = null;
  }
}
