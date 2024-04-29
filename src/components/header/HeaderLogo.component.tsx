import { LogoIconComponent } from '../icon/LogoIcon.component.tsx';

import styles from './header-logo.module.css';

export const HeaderLogoComponent = () => (
    <div className={styles.headerLogo}>
        <a href="/">
            <LogoIconComponent />
        </a>
    </div>
);
