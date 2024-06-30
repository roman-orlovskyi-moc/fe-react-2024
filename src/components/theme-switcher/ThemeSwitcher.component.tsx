import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ColorModeDividerIconComponent } from '@/components/icon/ColorModeDividerIcon.component.tsx';
import { DarkColorModeIconComponent } from '@/components/icon/DarkColorModeIcon.component.tsx';
import { LightColorModeIconComponent } from '@/components/icon/LightColorModeIcon.component.tsx';
import type { AppDispatch } from '@/store/store.ts';
import { themeSelector } from '@/store/theme/selectors.ts';
import { setColorScheme } from '@/store/theme/slice.ts';

import styles from './theme-switcher.module.css';

export const ThemeSwitcherComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { colorScheme } = useSelector(themeSelector);

    const setDarkColorScheme = () => {
        dispatch(setColorScheme('dark'));
    };

    const setLightColorScheme = () => {
        dispatch(setColorScheme('light'));
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
