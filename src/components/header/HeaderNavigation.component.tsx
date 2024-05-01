import React from 'react';

import styles from './header-navigation.module.css';

interface HeaderNavigationProps {
    shouldShowAboutPage: boolean;
    toggleShowAboutPageState: (isShowAboutPage: boolean) => void;
}

export const HeaderNavigationComponent: React.FC<HeaderNavigationProps> = ({ shouldShowAboutPage, toggleShowAboutPageState }) => {
    const showAboutPage = () => {
        toggleShowAboutPageState(true);
    };

    const showProductsPage = () => {
        toggleShowAboutPageState(false);
    };

    return (
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
    );
};
