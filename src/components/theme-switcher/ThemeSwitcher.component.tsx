import React from 'react';

import { ColorModeDividerIconComponent } from '@/components/icon/ColorModeDividerIcon.component.tsx';
import { DarkColorModeIconComponent } from '@/components/icon/DarkColorModeIcon.component.tsx';
import { LightColorModeIconComponent } from '@/components/icon/LightColorModeIcon.component.tsx';
import { useThemeMode } from '@/hooks/UseThemeMode.hook.ts';

import styles from './theme-switcher.module.css';

export const ThemeSwitcherComponent: React.FC = () => {
    const { colorScheme, setColorScheme } = useThemeMode();

    const setDarkColorScheme = () => {
        setColorScheme('dark');
    };

    const setLightColorScheme = () => {
        setColorScheme('light');
    };

    const themeSwitcherLightIconActiveClass = colorScheme === 'dark' ? '' : styles.themeSwitcherActiveIcon;
    const themeSwitcherDarkIconActiveClass = colorScheme === 'dark' ? styles.themeSwitcherActiveIcon : '';

    return (
        <div className={styles.themeSwitcher}>
            <button className={styles.themeSwitcherButton} onClick={setLightColorScheme} title="Switch to light mode">
                <LightColorModeIconComponent className={`${styles.themeSwitcherIcon} ${themeSwitcherLightIconActiveClass}`} />
            </button>
            <ColorModeDividerIconComponent />
            <button className={styles.themeSwitcherButton} onClick={setDarkColorScheme} title="Switch to dark mode">
                <DarkColorModeIconComponent className={`${styles.themeSwitcherIcon} ${themeSwitcherDarkIconActiveClass}`} />
            </button>
        </div>
    );
};
