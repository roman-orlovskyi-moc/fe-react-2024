import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './cart-icon-counter.module.css';

interface CartIconCounterProps {
    counter: number;
    wrapperClassName?: string;
}

type CartIconCounterComponentProps = CartIconCounterProps & IconProps;

export const CartIconCounterComponent: React.FC<CartIconCounterComponentProps> = ({ counter, wrapperClassName, className, title }) => {
    const wrapperClass: string = wrapperClassName ? `${wrapperClassName} ${styles.cartIconCounterWrapper}` : styles.cartIconCounterWrapper;
    const iconClassName: string = className ? `${className} ${styles.cartIcon}` : styles.cartIcon;

    return (
        <div className={wrapperClass}>
            <CartIconComponent className={iconClassName} title={title} />
            <span className={styles.cartIconCounter}>{counter}</span>
        </div>
    );
};
