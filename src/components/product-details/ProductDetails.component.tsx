import React, { useContext } from 'react';

import { CartIconComponent } from '@/components/icon/CartIcon.component.tsx';
import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';
import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import styles from './product-details.module.css';

export const ProductDetailsComponent: React.FC<ProductProps> = (productData) => {
    const appContext: AppContextProps = useContext(AppContext);

    const returnToProducts = () => {
        appContext.setRoutePath('#products');
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
        <div className={styles.productDetails}>
            <div className={styles.productDetailsLeftColumn}>
                <img className={styles.productDetailsImage} src={productData.images[0]} alt={productData.title} />
            </div>
            <div className={styles.productDetailsRightColumn}>
                <button className={styles.productDetailsButton} onClick={returnToProducts}>
                    Back
                </button>
                <h2 className={styles.productDetailsTitle}>{productData.title}</h2>
                <button className={styles.productDetailsButton}>{productData.category.name}</button>
                <div className={styles.productDetailsDescription}>{productData.description}</div>
                <div className={styles.productDetailsPrice}>{formattedPrice(productData.price)} ₴</div>
                <button
                    className={`${styles.productDetailsButton} ${styles.productDetailsAddToCartButton}`}
                    type="button"
                    onClick={addToCart}
                >
                    <CartIconComponent title="Add to cart" />
                    Add to cart
                </button>
            </div>
        </div>
    );
};
