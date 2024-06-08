import React from 'react';

import { calculateCartItemsCount } from '@/helpers/CartContext.helper.ts';
import { useCart } from '@/hooks/UseCart.hook.ts';

import { CartItemsComponent } from '../cart-items/CartItems.component.tsx';
import { CloseIconComponent } from '../icon/CloseIcon.component.tsx';

import styles from './cart.module.css';

export const CartComponent: React.FC = () => {
    const { cart } = useCart();
    const cartItemsCount: number = calculateCartItemsCount(cart.items);

    return (
        <div className={styles.cart}>
            <h1 className={styles.cartTitle}>Cart ({cartItemsCount})</h1>
            <button className={styles.cartCloseButton}>
                <CloseIconComponent className={styles.cartCloseIcon} title="Close cart" />
            </button>
            {cart.items.length > 0 ? (
                <CartItemsComponent />
            ) : (
                <div className={styles.cartEmpty}>You have not added any products to the cart yet.</div>
            )}
        </div>
    );
};
