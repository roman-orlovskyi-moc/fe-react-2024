import styles from './header-navigation.module.css';

export const HeaderNavigationComponent = () => (
    <ul className={styles.headerNav}>
        <li>
            <a className={styles.headerNavLink} href="/about">
                About
            </a>
        </li>
        <li>
            <a className={styles.headerNavLink} href="/products">
                Products
            </a>
        </li>
    </ul>
);
