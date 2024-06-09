import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import styles from '@/App.module.css';
import { useThemeMode } from '@/hooks/UseThemeMode.hook.ts';

import { FooterComponent } from '../footer/Footer.component.tsx';
import { HeaderComponent } from '../header/Header.component.tsx';

export const LayoutComponent: React.FC = () => {
    const { colorScheme } = useThemeMode();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenuOpen = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`${styles.pageWrapper} ${colorScheme} ${isMobileMenuOpen ? 'mobileMenuOpened' : ''}`}>
            <HeaderComponent isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenuOpen={toggleMobileMenuOpen} />
            <main className={`${styles.mainContentWrapper} ${styles.contentWrapper}`}>
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
};
