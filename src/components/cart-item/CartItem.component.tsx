import React from 'react';

import { formatPrice } from '@/helpers/ProductDetails.helper.tsx';
import type { CartItemProduct } from '@/interfaces/CartItemProduct.interface.ts';

import styles from './cart-item.module.css';

interface CartItemProps {
    cartItemProduct: CartItemProduct;
}

export const CartItemComponent: React.FC<CartItemProps> = ({ cartItemProduct }) => (
    <div className={styles.cartItem}>
        <img className={styles.cartItemImage} src={cartItemProduct.images[0]} alt={cartItemProduct.title} />
        <div>
            <h2 className={styles.cartItemTitle}>{cartItemProduct.title}</h2>
            <p className={styles.cartItemPrice}>{formatPrice(cartItemProduct.price)} ₴</p>
        </div>
        <p>{cartItemProduct.cartItem.quantity}</p>
        <p>{formatPrice(cartItemProduct.cartItem.quantity * cartItemProduct.price)} ₴</p>
        <div>x</div>
    </div>
);
