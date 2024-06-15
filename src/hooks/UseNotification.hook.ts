import { useContext } from 'react';

import { NotificationContext } from '../context/Notification.context.ts';
import type { NotificationContextProps } from '../interfaces/NotificationContextProps.interface.ts';

export const useNotification = (): NotificationContextProps => useContext(NotificationContext);
