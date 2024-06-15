import type { Notification } from './Notification.interface.ts';

export interface NotificationContextProps {
    notification: Notification | null;
    notify: (notification: Notification | null) => void;
}
