import { Component, OnInit, NgZone, ElementRef } from '@angular/core';
import { Notification } from '../../models/notification';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { NotificationObject } from 'src/app/models/notification-obj';
import { NotificationType } from 'src/app/enums/notification-type';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications:Object = {};
  index:string;

  constructor(
    private _notification:NotificationService,
    private _ngZone:NgZone,
    private elRef:ElementRef
  ) { }

  ngOnInit() {
    this._notification.notificationMessage.subscribe((notification:Notification) => {
      // check if message not empty
      if (notification) {
        let index = this.parseNotification(notification)

        this.hideNotification(index)
      }
    })
  }

  parseNotification(notification:Notification):string {
    let index = btoa(notification.message).toLowerCase();
    this.notifications[index] = notification;
    return index;
  }

  hideNotification(index:string):void {
    if (this.notifications[index]) {
      this.index = index
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.deleteIndex(this.index);
        }, 5000)
      })
    }
  }

  deleteIndex(index:string):void {
    if (this.notifications[index]) {
      this.elRef.nativeElement.querySelector(`[aria-index="${index}"]`).classList.remove('show')
      setTimeout(() => {
        delete this.notifications[index];
      }, 500);
    }
  }

  getNotification():Array<NotificationObject> | Array<null> {

    if (!this.notifications) {
      return [];
    }

    let result = [];

    for(let n in this.notifications) {
      let obj = {
        index: n,
        value: this.notifications[n]
      };
      
      result.push(obj);
    }

    return result;
  }

  getType(type:number):string {
    return NotificationType[1]
  }
}
