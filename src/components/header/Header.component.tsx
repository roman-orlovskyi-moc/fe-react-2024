import React, { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';

import { CartIconCounterComponent } from '../cart-icon-counter/CartIconCounter.component.tsx';
import { ColorModeDividerIconComponent } from '../icon/ColorModeDividerIcon.component.tsx';
import { DarkColorModeIconComponent } from '../icon/DarkColorModeIcon.component.tsx';
import { LightColorModeIconComponent } from '../icon/LightColorModeIcon.component.tsx';
import { LogoIconComponent } from '../icon/LogoIcon.component.tsx';
import { MobileMenuIconComponent } from '../icon/MobileMenuIcon.component.tsx';

import { HeaderAccountComponent } from './HeaderAccount.component.tsx';

import appStyles from '../../App.module.css';
import styles from './header.module.css';

interface HeaderProps {
    shouldShowAboutPage: boolean;
    toggleShowAboutPageState: (isShowAboutPage: boolean) => void;
    toggleMobileMenuOpen: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ shouldShowAboutPage, toggleShowAboutPageState, toggleMobileMenuOpen }) => {
    const appContext: AppContextProps = useContext(AppContext);
    const cartItemsCount: number = appContext.cart.items.reduce((sum, item) => sum + item.quantity, 0);

    const setDarkColorScheme = () => {
        appContext.setThemeMode('dark');
    };

    const setLightColorScheme = () => {
        appContext.setThemeMode('light');
    };

    const showAboutPage = () => {
        toggleShowAboutPageState(true);
    };

    const showProductsPage = () => {
        toggleShowAboutPageState(false);
    };

    return (
        <header className={styles.header}>
            <div className={`${appStyles.contentWrapper} ${styles.headerColumnWrapper}`}>
                <a className={styles.headerLogoLink} href="/">
                    <LogoIconComponent />
                </a>
                <div className={styles.headerModeSwitcher}>
                    <button className={styles.headerModeSwitcherButton} onClick={setLightColorScheme} title="Switch to light mode">
                        <LightColorModeIconComponent className={appContext.themeMode === 'dark' ? styles.headerModeInactiveIcon : ''} />
                    </button>
                    <ColorModeDividerIconComponent />
                    <button className={styles.headerModeSwitcherButton} onClick={setDarkColorScheme} title="Switch to dark mode">
                        <DarkColorModeIconComponent className={appContext.themeMode === 'dark' ? '' : styles.headerModeInactiveIcon} />
                    </button>
                </div>
                <ul className={styles.headerNav}>
                    <li>
                        <button
                            className={`${styles.headerNavLink} ${shouldShowAboutPage ? styles.headerNavLinkActive : ''}`}
                            onClick={showAboutPage}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className={`${styles.headerNavLink} ${shouldShowAboutPage ? '' : styles.headerNavLinkActive}`}
                            onClick={showProductsPage}
                        >
                            Products
                        </button>
                    </li>
                </ul>
                <a href="/cart" className={styles.headerCart}>
                    <CartIconCounterComponent count={cartItemsCount} wrapperClassName={styles.headerCartCounter} />
                </a>
                <HeaderAccountComponent />
                <button className={styles.headerMobileMenuButton} onClick={toggleMobileMenuOpen}>
                    <MobileMenuIconComponent />
                </button>
            </div>
        </header>
    );
};
