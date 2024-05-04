import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './cart-icon-counter.module.css';

interface CartIconCounterProps {
    count: number;
    wrapperClassName?: string;
    showCounter?: boolean;
}

type CartIconCounterComponentProps = CartIconCounterProps & IconProps;

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
