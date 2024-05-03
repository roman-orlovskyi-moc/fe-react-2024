import { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';

import { ColorModeDividerIconComponent } from '../icon/ColorModeDividerIcon.component.tsx';
import { DarkColorModeIconComponent } from '../icon/DarkColorModeIcon.component.tsx';
import { LightColorModeIconComponent } from '../icon/LightColorModeIcon.component.tsx';

import styles from './header-mode-switcher.module.css';

export const HeaderModeSwitcherComponent = () => {
    const appContext = useContext(AppContext);

    const setDarkColorScheme = () => {
        appContext.setThemeMode('dark');
    };

    const setLightColorScheme = () => {
        appContext.setThemeMode('light');
    };

    return (
        <div className={styles.headerModeSwitcher}>
            <button className={styles.headerModeSwitcherButton} onClick={setLightColorScheme} title="Switch to light mode">
                <LightColorModeIconComponent className={appContext.themeMode === 'dark' ? styles.headerModeInactiveIcon : ''} />
            </button>
            <ColorModeDividerIconComponent />
            <button className={styles.headerModeSwitcherButton} onClick={setDarkColorScheme} title="Switch to dark mode">
                <DarkColorModeIconComponent className={appContext.themeMode === 'dark' ? '' : styles.headerModeInactiveIcon} />
            </button>
        </div>
    );
};
