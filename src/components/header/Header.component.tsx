import React from 'react';

import { LogoIconComponent } from '../icon/LogoIcon.component.tsx';

import { HeaderAccountComponent } from './HeaderAccount.component.tsx';
import { HeaderCartComponent } from './HeaderCart.component.tsx';
import { HeaderMobileMenuComponent } from './HeaderMobileMenu.component.tsx';
import { HeaderModeSwitcherComponent } from './HeaderModeSwitcher.component.tsx';
import { HeaderNavigationComponent } from './HeaderNavigation.component.tsx';

import styles from './header.module.css';

interface HeaderProps {
    shouldShowAboutPage: boolean;
    toggleShowAboutPageState: (isShowAboutPage: boolean) => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ shouldShowAboutPage, toggleShowAboutPageState }) => (
    <header className={styles.header}>
        <div className={`contentWrapper ${styles.headerColumnWrapper}`}>
            <div className={styles.headerLeftColumn}>
                <div className={styles.headerColumnContainer}>
                    <div className={styles.headerLogo}>
                        <a href="/">
                            <LogoIconComponent />
                        </a>
                    </div>
                    <HeaderModeSwitcherComponent />
                </div>
            </div>
            <div className={styles.headerRightColumn}>
                <div className={styles.headerColumnWrapper}>
                    <div className={styles.headerLeftColumn}>
                        <HeaderNavigationComponent
                            shouldShowAboutPage={shouldShowAboutPage}
                            toggleShowAboutPageState={toggleShowAboutPageState}
                        />
                    </div>
                    <div className={styles.headerRightColumn}>
                        <div className={`${styles.headerColumnContainer} ${styles.headerColumnRight}`}>
                            <HeaderCartComponent />
                            <HeaderAccountComponent />
                            <HeaderMobileMenuComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
