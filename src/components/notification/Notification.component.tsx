import React from 'react';

import { useNotification } from '@/hooks/UseNotification.hook.ts';

import { CloseIconComponent } from '../icon/CloseIcon.component.tsx';

import styles from './notification.module.css';

export const NotificationComponent: React.FC = () => {
    const { notification, notify } = useNotification();

    if (!notification) {
        return null;
    }

    const notificationTypeClass = notification.type === 'error' ? styles.error : styles.success;

    return (
        <div className={`${styles.notification} ${notificationTypeClass}`}>
            <p>{notification.message}</p>
            <button className={styles.closeButton} onClick={() => notify(null)}>
                <CloseIconComponent className={styles.closeIcon} title="Close notification" />
            </button>
        </div>
    );
};
