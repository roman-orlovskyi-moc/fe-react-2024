import { useContext } from 'react';

import { CartContext } from '@/context/CartContext.context.tsx';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './header-cart.module.css';

export const HeaderCartComponent = () => {
    const cartContext = useContext(CartContext);
    const cartItemsCount = cartContext.cart.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <a href="/cart" className={styles.headerCart}>
            <CartIconComponent />
            <div className={styles.headerCartCounter}>{cartItemsCount}</div>
        </a>
    );
};
