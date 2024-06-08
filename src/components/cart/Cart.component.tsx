import React, { useContext } from 'react';

import { CartContext } from '@/context/Cart.context.tsx';
import { calculateCartItemsCount } from '@/helpers/CartContext.helper.ts';

import { CartItemsComponent } from '../cart-items/CartItems.component.tsx';

import styles from './cart.module.css';

export const CartComponent: React.FC = () => {
    const { cart } = useContext(CartContext);
    const cartItemsCount: number = calculateCartItemsCount(cart.items);

    return (
        <div className={styles.cart}>
            <h1 className={styles.aboutTitle}>Cart ({cartItemsCount})</h1>
            {cart.items.length > 0 ? (
                <CartItemsComponent />
            ) : (
                <div className={styles.cartEmpty}>You have not added any products to the cart yet.</div>
            )}
        </div>
    );
};
