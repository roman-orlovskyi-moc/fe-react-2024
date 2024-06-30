import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import styles from '@/App.module.css';
import { themeSelector } from '@/store/theme/selectors.ts';

import { FooterComponent } from '../footer/Footer.component.tsx';
import { HeaderComponent } from '../header/Header.component.tsx';

export const LayoutComponent: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const { colorScheme } = useSelector(themeSelector);

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
