import React, { useCallback, useState } from 'react';

import { NotificationContext } from '../context/Notification.context.tsx';
import type { Notification } from '../interfaces/Notification.interface.ts';

interface NotificationContextProviderProps {
    children: React.ReactNode;
}

export const NotificationContextProvider: React.FC<NotificationContextProviderProps> = ({ children }) => {
    const [notification, setNotification] = useState<Notification | null>(null);

    const notify = useCallback((note: Notification | null) => {
        setNotification(note);
    }, []);

    return <NotificationContext.Provider value={{ notification, notify }}>{children}</NotificationContext.Provider>;
};
