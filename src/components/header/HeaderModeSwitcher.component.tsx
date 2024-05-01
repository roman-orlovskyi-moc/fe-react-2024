import { useEffect, useState } from 'react';

import { ColorModeDividerIconComponent } from '../icon/ColorModeDividerIcon.component.tsx';
import { DarkColorModeIconComponent } from '../icon/DarkColorModeIcon.component.tsx';
import { LightColorModeIconComponent } from '../icon/LightColorModeIcon.component.tsx';

import styles from './header-mode-switcher.module.css';

export const HeaderModeSwitcherComponent = () => {
    type ColorScheme = 'dark' | 'light';

    const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
        const savedScheme = localStorage.getItem('colorScheme') as ColorScheme;

        return savedScheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        localStorage.setItem('colorScheme', colorScheme);
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(colorScheme);
    }, [colorScheme]);

    const setDarkColorScheme = () => {
        setColorScheme('dark');
    };

    const setLightColorScheme = () => {
        setColorScheme('light');
    };

    return (
        <div className={styles.headerModeSwitcher}>
            <button className={styles.headerModeSwitcherButton} onClick={setLightColorScheme} title="Switch to light mode">
                <LightColorModeIconComponent className={colorScheme === 'dark' ? styles.headerModeInactiveIcon : ''} />
            </button>
            <ColorModeDividerIconComponent />
            <button className={styles.headerModeSwitcherButton} onClick={setDarkColorScheme} title="Switch to dark mode">
                <DarkColorModeIconComponent className={colorScheme === 'dark' ? '' : styles.headerModeInactiveIcon} />
            </button>
        </div>
    );
};
