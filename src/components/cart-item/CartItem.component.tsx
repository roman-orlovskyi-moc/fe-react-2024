import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/Routes.constant.ts';
import { formatPrice } from '@/helpers/ProductDetails.helper.tsx';
import type { CartItemProduct } from '@/interfaces/CartItemProduct.interface.ts';

import { MinusIconComponent } from '../icon/MinusIcon.component.tsx';
import { PlusIconComponent } from '../icon/PlusIcon.component.tsx';
import { TrashIconComponent } from '../icon/TrashIcon.component.tsx';

import styles from './cart-item.module.css';

interface CartItemProps {
    cartItemProduct: CartItemProduct;
}

export const CartItemComponent: React.FC<CartItemProps> = ({ cartItemProduct }) => {
    const cartItemProductLink = `${ROUTES.PRODUCTS}/${cartItemProduct.id}`;

    return (
        <div className={styles.cartItem}>
            <Link to={cartItemProductLink} className={styles.cartItemImageContainer}>
                <img className={styles.cartItemImage} src={cartItemProduct.images[0]} alt={cartItemProduct.title} />
            </Link>
            <div className={styles.cartItemTitleContainer}>
                <Link to={cartItemProductLink} className={styles.cartItemTitle}>
                    {cartItemProduct.title}
                </Link>
                <div>
                    <span className={styles.cartItemPrice}>{formatPrice(cartItemProduct.price)}</span>
                    <span className={styles.cartItemPriceUnit}>₴</span>
                </div>
            </div>
            <div className={styles.cartItemQuantityContainer}>
                <button className={styles.cartItemQuantityButton}>
                    <MinusIconComponent className={styles.cartItemQuantityButtonIcon} title="Decrease quantity" />
                </button>
                <input className={styles.cartItemQuantityInput} defaultValue={cartItemProduct.quantity} />
                <button className={styles.cartItemQuantityButton}>
                    <PlusIconComponent className={styles.cartItemQuantityButtonIcon} title="Increase quantity" />
                </button>
            </div>
            <div className={styles.cartTotalPriceContainer}>
                <span className={styles.cartItemTotalPrice}>{formatPrice(cartItemProduct.quantity * cartItemProduct.price)}</span>
                <span className={styles.cartItemTotalPriceUnit}>₴</span>
            </div>
            <div className={styles.cartItemRemoveContainer}>
                <button className={styles.cartItemRemoveButton}>
                    <TrashIconComponent className={styles.cartItemRemoveIcon} title="Remove item" />
                </button>
            </div>
        </div>
    );
};
