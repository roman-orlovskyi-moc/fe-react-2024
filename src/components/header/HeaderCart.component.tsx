import { useContext } from 'react';

import { CartContext } from '@/context/CartContext.context.tsx';

import { CartIconCounterComponent } from '../common/CartIconCounter.component.tsx';

import styles from './header-cart.module.css';

export const HeaderCartComponent = () => {
    const cartContext = useContext(CartContext);
    const cartItemsCount = cartContext.cart.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <a href="/cart" className={styles.headerCart}>
            <CartIconCounterComponent counter={cartItemsCount} />
        </a>
    );
};
