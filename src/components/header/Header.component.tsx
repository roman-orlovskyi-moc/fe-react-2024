import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import appStyles from '@/App.module.css';
import { ROUTES } from '@/constants/Routes.constant.ts';
import { CartContext } from '@/context/Cart.context.tsx';
import { calculateCartItemsCount } from '@/helpers/CartContext.helper.ts';
import type { ColorScheme } from '@/types/ColorScheme.type.ts';

import { CartIconCounterComponent } from '../cart-icon-counter/CartIconCounter.component.tsx';
import { HeaderAccountComponent } from '../header-account/HeaderAccount.component.tsx';
import { ColorModeDividerIconComponent } from '../icon/ColorModeDividerIcon.component.tsx';
import { DarkColorModeIconComponent } from '../icon/DarkColorModeIcon.component.tsx';
import { LightColorModeIconComponent } from '../icon/LightColorModeIcon.component.tsx';
import { LogoIconComponent } from '../icon/LogoIcon.component.tsx';
import { MobileMenuIconComponent } from '../icon/MobileMenuIcon.component.tsx';

import styles from './header.module.css';

interface HeaderProps {
    themeMode: ColorScheme;
    setThemeMode: (mode: ColorScheme) => void;
    isMobileMenuOpen: boolean;
    toggleMobileMenuOpen: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ themeMode, setThemeMode, isMobileMenuOpen, toggleMobileMenuOpen }) => {
    const { cart } = useContext(CartContext);
    const cartItemsCount: number = calculateCartItemsCount(cart.items);
    const MOBILE_MENU_CLOSE_CLICK_TAGS: Set<string> = new Set(['A', 'BUTTON']);

    const handleMobileMenuClose = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;

        if (isMobileMenuOpen && target && MOBILE_MENU_CLOSE_CLICK_TAGS.has(target.tagName)) {
            toggleMobileMenuOpen();
        }
    };

    const setDarkColorScheme = () => {
        setThemeMode('dark');
    };

    const setLightColorScheme = () => {
        setThemeMode('light');
    };

    const lightColorModeIconActiveClass = themeMode === 'dark' ? '' : styles.headerModeActiveIcon;
    const darkColorModeIconActiveClass = themeMode === 'dark' ? styles.headerModeActiveIcon : '';

    const headerNavLinkClasses = (isActive: boolean) => `${styles.headerNavLink} ${isActive ? styles.headerNavLinkActive : ''}`;

    return (
        <header className={styles.header} onClick={handleMobileMenuClose}>
            <div className={`${appStyles.contentWrapper} ${styles.headerColumnWrapper}`}>
                <Link to={ROUTES.ROOT} className={styles.headerLogoLink}>
                    <LogoIconComponent className={styles.headerLogoIcon} />
                </Link>
                <div className={styles.headerMenuWrapper}>
                    <div className={styles.headerModeSwitcher}>
                        <button className={styles.headerModeSwitcherButton} onClick={setLightColorScheme} title="Switch to light mode">
                            <LightColorModeIconComponent className={`${styles.headerModeIcon} ${lightColorModeIconActiveClass}`} />
                        </button>
                        <ColorModeDividerIconComponent />
                        <button className={styles.headerModeSwitcherButton} onClick={setDarkColorScheme} title="Switch to dark mode">
                            <DarkColorModeIconComponent className={`${styles.headerModeIcon} ${darkColorModeIconActiveClass}`} />
                        </button>
                    </div>
                    <ul className={styles.headerNav}>
                        <li>
                            <NavLink to={ROUTES.ROOT} className={({ isActive }) => headerNavLinkClasses(isActive)} end={true}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.PRODUCTS} className={({ isActive }) => headerNavLinkClasses(isActive)}>
                                Products
                            </NavLink>
                        </li>
                    </ul>
                    <HeaderAccountComponent className={styles.headerMobileHeaderAccount} />
                </div>
                <Link to={ROUTES.CART} className={styles.headerCart}>
                    <CartIconCounterComponent count={cartItemsCount} wrapperClassName={styles.headerCartCounter} />
                </Link>
                <HeaderAccountComponent className={styles.headerDesktopHeaderAccount} />
                <button className={styles.headerMobileMenuButton} onClick={toggleMobileMenuOpen}>
                    <MobileMenuIconComponent />
                </button>
            </div>
        </header>
    );
};
