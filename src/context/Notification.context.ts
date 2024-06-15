import { createContext } from 'react';

import type { Notification } from '../interfaces/Notification.interface.ts';
import type { NotificationContextProps } from '../interfaces/NotificationContextProps.interface';

export const NotificationContext = createContext<NotificationContextProps>({
    notification: null,
    notify: (note: Notification | null) => null,
});
