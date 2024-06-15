import { useContext } from 'react';

import { NotificationContext } from '../context/Notification.context.tsx';

export const useNotification = () => useContext(NotificationContext);
