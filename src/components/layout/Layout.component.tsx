import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import styles from '@/App.module.css';
import { mobileMenuSelector } from '@/store/mobile-menu/selectors.ts';
import { themeSelector } from '@/store/theme/selectors.ts';

import { FooterComponent } from '../footer/Footer.component.tsx';
import { HeaderComponent } from '../header/Header.component.tsx';

export const LayoutComponent: React.FC = () => {
    const { colorScheme } = useSelector(themeSelector);
    const { isMobileMenuOpen } = useSelector(mobileMenuSelector);

    return (
        <div className={`${styles.pageWrapper} ${colorScheme} ${isMobileMenuOpen ? 'mobileMenuOpened' : ''}`}>
            <HeaderComponent />
            <main className={`${styles.mainContentWrapper} ${styles.contentWrapper}`}>
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
};
