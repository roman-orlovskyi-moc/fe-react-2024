import { ColorModeDividerIconComponent } from '../icon/ColorModeDividerIcon.component.tsx';
import { ColorModeMoonIconComponent } from '../icon/ColorModeMoonIcon.component.tsx';
import { ColorModeSunIconComponent } from '../icon/ColorModeSunIcon.component.tsx';

import styles from './header-mode-switcher.module.css';

export const HeaderModeSwitcherComponent = () => {
    const shouldShowDarkSchema = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <div className={styles.headerModeSwitcher}>
            <ColorModeSunIconComponent className={shouldShowDarkSchema ? styles.headerModeInactiveIcon : ''} />
            <ColorModeDividerIconComponent />
            <ColorModeMoonIconComponent className={shouldShowDarkSchema ? '' : styles.headerModeInactiveIcon} />
        </div>
    );
};
