import React from 'react';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './cart-icon-counter.module.css';

interface CartIconCounterProps {
    counter: number;
}

export const CartIconCounterComponent: React.FC<CartIconCounterProps> = ({ counter }) => (
    <>
        <CartIconComponent />
        <div className={styles.cartIconCounter}>{counter}</div>
    </>
);
