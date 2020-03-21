import { NotificationType } from '../enums/notification-type';

export interface Notification {
    type:NotificationType,
    message:string
}