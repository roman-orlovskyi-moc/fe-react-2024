import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import styles from '@/App.module.css';
import { parseColorScheme, setStoredColorScheme } from '@/helpers/App.helper.ts';
import type { ColorScheme } from '@/types/ColorScheme.type.ts';

import { FooterComponent } from '../footer/Footer.component.tsx';
import { HeaderComponent } from '../header/Header.component.tsx';

export const LayoutComponent: React.FC = () => {
    const [themeMode, setThemeMode] = useState<ColorScheme>(() => parseColorScheme());
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        setStoredColorScheme(themeMode);
    }, [themeMode]);

    const toggleMobileMenuOpen = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`${styles.pageWrapper} ${themeMode} ${isMobileMenuOpen ? 'mobileMenuOpened' : ''}`}>
            <HeaderComponent
                themeMode={themeMode}
                setThemeMode={setThemeMode}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenuOpen={toggleMobileMenuOpen}
            />
            <main className={`${styles.mainContentWrapper} ${styles.contentWrapper}`}>
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
};
