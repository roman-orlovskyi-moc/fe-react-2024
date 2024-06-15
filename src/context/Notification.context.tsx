import type React from 'react';
import { createContext } from 'react';

import type { Notification } from '../interfaces/Notification.interface';

interface NotificationContextProps {
    notification: Notification | null;
    setNotification: React.Dispatch<React.SetStateAction<Notification | null>>;
}

export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);
