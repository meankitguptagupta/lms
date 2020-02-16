enum NotificationType {
    danger,
    success,
    info,
    warning
}

export interface Notification {
    type:string,
    message:NotificationType
}