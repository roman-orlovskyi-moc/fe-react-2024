type NotificationType = 'error' | 'success';

export interface Notification {
    message: string;
    type: NotificationType;
}
