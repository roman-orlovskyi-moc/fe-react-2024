import { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';

import { CartIconCounterComponent } from '../common/CartIconCounter.component.tsx';

import styles from './header-cart.module.css';

export const HeaderCartComponent = () => {
    const appContext = useContext(AppContext);
    const cartItemsCount = appContext.cart.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <a href="/cart" className={styles.headerCart}>
            <CartIconCounterComponent counter={cartItemsCount} />
        </a>
    );
};
