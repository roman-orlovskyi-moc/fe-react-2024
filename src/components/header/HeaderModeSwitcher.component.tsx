import { ColorModeDividerIconComponent } from '../icon/ColorModeDividerIcon.component.tsx';
import { ColorModeMoonIconComponent } from '../icon/ColorModeMoonIcon.component.tsx';
import { ColorModeSunIconComponent } from '../icon/ColorModeSunIcon.component.tsx';

import styles from './header-mode-switcher.module.css';

export const HeaderModeSwitcherComponent = () => (
    <div className={styles.headerModeSwitcher}>
        <a href="/">
            <ColorModeSunIconComponent />
        </a>
        <ColorModeDividerIconComponent />
        <a href="/">
            <ColorModeMoonIconComponent />
        </a>
    </div>
);
