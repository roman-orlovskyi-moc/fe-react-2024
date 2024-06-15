import React, { useState } from 'react';

import { NotificationContext } from '../context/Notification.context.tsx';
import type { Notification } from '../interfaces/Notification.interface.ts';

interface NotificationContextProviderProps {
    children: React.ReactNode;
}

export const NotificationContextProvider: React.FC<NotificationContextProviderProps> = ({ children }) => {
    const [notification, setNotification] = useState<Notification | null>(null);

    return <NotificationContext.Provider value={{ notification, setNotification }}>{children}</NotificationContext.Provider>;
};
