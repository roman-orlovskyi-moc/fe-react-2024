import React from 'react';
import { useNavigate } from 'react-router-dom';

import { findCartItemById } from '@/helpers/CartContext.helper.ts';
import { formatPrice } from '@/helpers/ProductDetails.helper.tsx';
import { useCart } from '@/hooks/UseCart.hook.ts';
import type { CartItem } from '@/interfaces/CartItem.interface.ts';
import type { Product } from '@/interfaces/Product.interface.ts';

import { CartIconCounterComponent } from '../cart-icon-counter/CartIconCounter.component.tsx';

import styles from './product-card.module.css';

export const ProductCardComponent: React.FC<Product> = (productData) => {
    const navigate = useNavigate();
    const { cart, addToCart } = useCart();
    const productCartItem: CartItem | undefined = findCartItemById(cart.items, productData.id);
    const productCartItemCount: number = productCartItem ? productCartItem.quantity : 0;

    const showProductPage = () => {
        navigate(`${productData.id}`);
    };

    const addProductToCart = () => {
        addToCart({ id: productData.id, quantity: 1 });
    };

    return (
        <div className={styles.productCard}>
            <img className={styles.productCardImage} src={productData.images[0]} alt={productData.title} onClick={showProductPage} />
            <h3 className={styles.productCardTitle} onClick={showProductPage}>
                {productData.title}
            </h3>
            <div className={styles.addToCartWrapper}>
                <div className={styles.productCardPrice}>{formatPrice(productData.price)} ₴</div>
                <button className={styles.productCardAddToCartButton} type="button" onClick={addProductToCart}>
                    <CartIconCounterComponent count={productCartItemCount} showCounter={productCartItemCount > 0} title="Add to cart" />
                </button>
            </div>
        </div>
    );
};
