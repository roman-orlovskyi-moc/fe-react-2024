import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './header-cart.module.css';

export const HeaderCartComponent = () => (
    <a href="/cart" className={styles.headerCart}>
        <CartIconComponent />
        <div className={styles.headerCartCounter}>0</div>
    </a>
);
