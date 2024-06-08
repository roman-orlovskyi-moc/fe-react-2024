import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '@/constants/Routes.constant.ts';

import styles from './header-navigation.module.css';

export const HeaderNavigationComponent: React.FC = () => {
    const headerNavLinkClasses = (isActive: boolean) =>
        `${styles.headerNavigationLink} ${isActive ? styles.headerNavigationLinkActive : ''}`;

    return (
        <ul className={styles.headerNavigation}>
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
    );
};
