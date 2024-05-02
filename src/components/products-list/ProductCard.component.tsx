import React from 'react';

import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';

import styles from './product-card.module.css';

export const ProductCardComponent: React.FC<ProductProps> = (productData) => {
    const formattedPrice = (price: number) => price.toLocaleString('uk-UA');

    return (
        <div className={styles.productCard}>
            <img className={styles.productCardImage} src={productData.images[0]} alt={productData.title} />
            <h3 className={styles.productCardTitle}>{productData.title}</h3>
            <div className={styles.addToCartWrapper}>
                <div className={styles.productCardPrice}>{formattedPrice(productData.price)} ₴</div>
                <button className={styles.productCardAddToCartButton} type="button">
                    <CartIconComponent title="Add to cart" />
                </button>
            </div>
        </div>
    );
};
