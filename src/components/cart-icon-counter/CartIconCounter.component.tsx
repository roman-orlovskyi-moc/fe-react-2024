import React from 'react';

import type { Icon } from '@/interfaces/Icon.interface.ts';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './cart-icon-counter.module.css';

interface CartIconCounter {
    count: number;
    wrapperClassName?: string;
    showCounter?: boolean;
}

type CartIconCounterComponentProps = CartIconCounter & Icon;

export const CartIconCounterComponent: React.FC<CartIconCounterComponentProps> = ({
    count,
    wrapperClassName,
    showCounter,
    className,
    title,
}) => {
    const wrapperClass: string = wrapperClassName ? `${wrapperClassName} ${styles.cartIconCounterWrapper}` : styles.cartIconCounterWrapper;
    const iconClassName: string = className ? `${className} ${styles.cartIcon}` : styles.cartIcon;

    return showCounter === true || showCounter === undefined ? (
        <div className={wrapperClass}>
            <CartIconComponent className={iconClassName} title={title} />
            <span className={styles.cartIconCounter}>{count}</span>
        </div>
    ) : (
        <CartIconComponent className={iconClassName} title={title} />
    );
};
