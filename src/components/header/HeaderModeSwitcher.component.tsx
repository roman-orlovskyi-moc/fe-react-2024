import { useEffect, useState } from 'react';

import { ColorModeDividerIconComponent } from '../icon/ColorModeDividerIcon.component.tsx';
import { DarkColorModeIconComponent } from '../icon/DarkColorModeIcon.component.tsx';
import { LightColorModeIconComponent } from '../icon/LightColorModeIcon.component.tsx';

import styles from './header-mode-switcher.module.css';

export const HeaderModeSwitcherComponent = () => {
    const browserColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    type ColorScheme = 'dark' | 'light' | null;

    const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
        const savedScheme = localStorage.getItem('colorScheme');
        const validColorSchemes: ColorScheme[] = ['dark', 'light'];

        return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : null;
    });

    useEffect(() => {
        if (colorScheme && colorScheme !== browserColorScheme) {
            localStorage.setItem('colorScheme', colorScheme);
            document.documentElement.classList.remove('dark', 'light');
            document.documentElement.classList.add(colorScheme);
        } else {
            localStorage.removeItem('colorScheme');
            document.documentElement.classList.remove('dark', 'light');
        }
    }, [colorScheme]);

    const setDarkColorScheme = () => {
        setColorScheme('dark');
    };

    const setLightColorScheme = () => {
        setColorScheme('light');
    };

    const currentColorScheme = colorScheme || browserColorScheme;

    return (
        <div className={styles.headerModeSwitcher}>
            <button className={styles.headerModeSwitcherButton} onClick={setLightColorScheme} title="Switch to light mode">
                <LightColorModeIconComponent className={currentColorScheme === 'dark' ? styles.headerModeInactiveIcon : ''} />
            </button>
            <ColorModeDividerIconComponent />
            <button className={styles.headerModeSwitcherButton} onClick={setDarkColorScheme} title="Switch to dark mode">
                <DarkColorModeIconComponent className={currentColorScheme === 'dark' ? '' : styles.headerModeInactiveIcon} />
            </button>
        </div>
    );
};
