import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import appStyles from '@/App.module.css';
import { ROUTES } from '@/constants/Routes.constant.ts';
import { cartSelector } from '@/store/cart/selectors.ts';

import { CartIconCounterComponent } from '../cart-icon-counter/CartIconCounter.component.tsx';
import { HeaderAccountComponent } from '../header-account/HeaderAccount.component.tsx';
import { HeaderNavigationComponent } from '../header-navigation/HeaderNavigation.component.tsx';
import { LogoIconComponent } from '../icon/LogoIcon.component.tsx';
import { MobileMenuIconComponent } from '../icon/MobileMenuIcon.component.tsx';
import { ThemeSwitcherComponent } from '../theme-switcher/ThemeSwitcher.component.tsx';

import styles from './header.module.css';

interface HeaderProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenuOpen: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ isMobileMenuOpen, toggleMobileMenuOpen }) => {
    const MOBILE_MENU_CLOSE_CLICK_TAGS: Set<string> = new Set(['A', 'BUTTON']);

    const { cartItemsCount } = useSelector(cartSelector);

    const handleMobileMenuClose = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;

        if (isMobileMenuOpen && target && MOBILE_MENU_CLOSE_CLICK_TAGS.has(target.tagName)) {
            toggleMobileMenuOpen();
        }
    };

    return (
        <header className={styles.header} onClick={handleMobileMenuClose}>
            <div className={`${appStyles.contentWrapper} ${styles.headerColumnWrapper}`}>
                <Link to={ROUTES.ROOT} className={styles.headerLogoLink}>
                    <LogoIconComponent className={styles.headerLogoIcon} />
                </Link>
                <div className={styles.headerMenuWrapper}>
                    <ThemeSwitcherComponent />
                    <HeaderNavigationComponent />
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
