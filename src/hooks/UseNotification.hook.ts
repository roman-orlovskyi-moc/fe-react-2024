import { useContext } from 'react';

import { NotificationContext } from '../context/Notification.context.tsx';
import type { NotificationContextProps } from '../interfaces/NotificationContextProps.interface.ts';

export const useNotification = (): NotificationContextProps => useContext(NotificationContext);
