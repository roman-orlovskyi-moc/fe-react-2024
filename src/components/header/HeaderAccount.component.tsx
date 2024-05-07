import { CreateAccountIconComponent } from '../icon/CreateAccountIcon.component.tsx';
import { LoginIconComponent } from '../icon/LoginIcon.component.tsx';

import styles from './header-account.module.css';

export const HeaderAccountComponent = () => (
    <div className={styles.headerAccount}>
        <a href="/login" className={`${styles.headerButton} ${styles.loginButton}`}>
            <LoginIconComponent className={styles.headerButtonIcon} />
            Login
        </a>
        <a href="/register" className={styles.headerButton}>
            <CreateAccountIconComponent className={styles.headerButtonIcon} />
            Sign Up
        </a>
    </div>
);
