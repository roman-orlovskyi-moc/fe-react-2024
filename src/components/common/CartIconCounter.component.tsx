import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './cart-icon-counter.module.css';

interface CartIconCounterProps {
    counter: number;
}

type CartIconCounterComponentProps = CartIconCounterProps & IconProps;

export const CartIconCounterComponent: React.FC<CartIconCounterComponentProps> = ({ counter, className, title }) => {
    const iconClassName = className ? `${className} ${styles.cartIcon}` : styles.cartIcon;

    return (
        <div className={styles.cartIconCounterWrapper}>
            <CartIconComponent className={iconClassName} title={title} />
            <span className={styles.cartIconCounter}>{counter}</span>
        </div>
    );
};
