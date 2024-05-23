import React, { useContext } from 'react';

import appStyles from '@/App.module.css';
import { AppContext } from '@/context/AppContext.context.tsx';
import { CartContext } from '@/context/Cart.context.tsx';
import { RouterContext } from '@/context/Router.context.tsx';

import { CartIconCounterComponent } from '../cart-icon-counter/CartIconCounter.component.tsx';
import { HeaderAccountComponent } from '../header-account/HeaderAccount.component.tsx';
import { ColorModeDividerIconComponent } from '../icon/ColorModeDividerIcon.component.tsx';
import { DarkColorModeIconComponent } from '../icon/DarkColorModeIcon.component.tsx';
import { LightColorModeIconComponent } from '../icon/LightColorModeIcon.component.tsx';
import { LogoIconComponent } from '../icon/LogoIcon.component.tsx';
import { MobileMenuIconComponent } from '../icon/MobileMenuIcon.component.tsx';

import styles from './header.module.css';

interface HeaderProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenuOpen: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ isMobileMenuOpen, toggleMobileMenuOpen }) => {
    const { route, setRoutePath } = useContext(RouterContext);
    const { cart } = useContext(CartContext);
    const { themeMode, setThemeMode } = useContext(AppContext);
    const cartItemsCount: number = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    const handleMobileMenuClose = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;

        if (isMobileMenuOpen && target && ['A', 'BUTTON'].includes(target.tagName)) {
            toggleMobileMenuOpen();
        }
    };

    const setDarkColorScheme = () => {
        setThemeMode('dark');
    };

    const setLightColorScheme = () => {
        setThemeMode('light');
    };

    const showAboutPage = () => {
        setRoutePath('/about');
    };

    const showProductsPage = () => {
        setRoutePath('/products');
    };

    const aboutPageActiveClass: string = route.path === '/about' ? styles.headerNavLinkActive : '';
    const productsPageActiveClass: string =
        route.path === '/products' || route.path.startsWith('/product/') ? styles.headerNavLinkActive : '';

    return (
        <header className={styles.header} onClick={handleMobileMenuClose}>
            <div className={`${appStyles.contentWrapper} ${styles.headerColumnWrapper}`}>
                <a className={styles.headerLogoLink} href="/">
                    <LogoIconComponent />
                </a>
                <div className={styles.headerMenuWrapper}>
                    <div className={styles.headerModeSwitcher}>
                        <button className={styles.headerModeSwitcherButton} onClick={setLightColorScheme} title="Switch to light mode">
                            <LightColorModeIconComponent
                                className={`${styles.headerModeIcon} ${themeMode === 'dark' ? '' : styles.headerModeActiveIcon}`}
                            />
                        </button>
                        <ColorModeDividerIconComponent />
                        <button className={styles.headerModeSwitcherButton} onClick={setDarkColorScheme} title="Switch to dark mode">
                            <DarkColorModeIconComponent
                                className={`${styles.headerModeIcon} ${themeMode === 'dark' ? styles.headerModeActiveIcon : ''}`}
                            />
                        </button>
                    </div>
                    <ul className={styles.headerNav}>
                        <li>
                            <button className={`${styles.headerNavLink} ${aboutPageActiveClass}`} onClick={showAboutPage}>
                                About
                            </button>
                        </li>
                        <li>
                            <button className={`${styles.headerNavLink} ${productsPageActiveClass}`} onClick={showProductsPage}>
                                Products
                            </button>
                        </li>
                    </ul>
                    <HeaderAccountComponent className={styles.headerMobileHeaderAccount} />
                </div>
                <a href="/cart" className={styles.headerCart}>
                    <CartIconCounterComponent count={cartItemsCount} wrapperClassName={styles.headerCartCounter} />
                </a>
                <HeaderAccountComponent className={styles.headerDesktopHeaderAccount} />
                <button className={styles.headerMobileMenuButton} onClick={toggleMobileMenuOpen}>
                    <MobileMenuIconComponent />
                </button>
            </div>
        </header>
    );
};
