import React from 'react';

import type { IconProps } from '@/interfaces/IconProps.interface.tsx';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './cart-icon-counter.module.css';

interface CartIconCounterProps {
    counter: number;
}

type CartIconCounterComponentProps = CartIconCounterProps & IconProps;

export const CartIconCounterComponent: React.FC<CartIconCounterComponentProps> = ({ counter, className, title }) => (
    <>
        <CartIconComponent className={className} title={title} />
        <div className={styles.cartIconCounter}>{counter}</div>
    </>
);
