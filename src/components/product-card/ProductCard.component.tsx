import React, { useContext } from 'react';

import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';
import type { CartItemProps } from '@/interfaces/CartItemProps.interface.tsx';
import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import { CartIconCounterComponent } from '../cart-icon-counter/CartIconCounter.component.tsx';

import styles from './product-card.module.css';

export const ProductCardComponent: React.FC<ProductProps> = (productData) => {
    const appContext: AppContextProps = useContext(AppContext);
    const productCartItem: CartItemProps | undefined = appContext.cart.items.find((item) => item.id === productData.id);
    const productCartItemCount: number = productCartItem ? productCartItem.quantity : 0;

    const showProductPage = () => {
        appContext.setRoutePath(`#/product/${productData.id}`);
    };

    const addToCart = () => {
        appContext.addToCart({
            id: productData.id,
            image: productData.images[0],
            title: productData.title,
            price: productData.price,
            quantity: 1,
        });
    };

    const formattedPrice = (price: number) => price.toLocaleString('uk-UA');

    return (
        <div className={styles.productCard}>
            <img className={styles.productCardImage} src={productData.images[0]} alt={productData.title} onClick={showProductPage} />
            <h3 className={styles.productCardTitle} onClick={showProductPage}>
                {productData.title}
            </h3>
            <div className={styles.addToCartWrapper}>
                <div className={styles.productCardPrice}>{formattedPrice(productData.price)} ₴</div>
                <button className={styles.productCardAddToCartButton} type="button" onClick={addToCart}>
                    <CartIconCounterComponent count={productCartItemCount} showCounter={productCartItemCount > 0} title="Add to cart" />
                </button>
            </div>
        </div>
    );
};
