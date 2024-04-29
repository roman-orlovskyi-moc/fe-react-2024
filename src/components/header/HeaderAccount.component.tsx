import { CreateAccountIconComponent } from '../icon/CreateAccountIcon.component.tsx';
import { LoginIconComponent } from '../icon/LoginIcon.component.tsx';

import styles from './header-account.module.css';

export const HeaderAccountComponent = () => (
    <div className={styles.headerAccount}>
        <a href="/login" className={`button ${styles.loginButton}`}>
            <LoginIconComponent />
            Login
        </a>
        <a href="/register" className="button">
            <CreateAccountIconComponent />
            Sign Up
        </a>
    </div>
);
