import React, { useContext } from 'react';

import appStyles from '@/App.module.css';
import { AppContext } from '@/context/AppContext.context.tsx';
import type { Product } from '@/interfaces/Product.interface.tsx';

import { ArrowIconComponent } from '../icon/ArrowIcon.component.tsx';
import { CartIconComponent } from '../icon/CartIcon.component.tsx';
import { ProductImageCarouselComponent } from '../product-image-carousel/ProductImageCarousel.component.tsx';

import styles from './product-details.module.css';

export const ProductDetailsComponent: React.FC<Product> = (productData) => {
    const { addToCart, backToPreviousRoute } = useContext(AppContext);

    const returnToProducts = () => {
        backToPreviousRoute('/products');
    };

    const addProductToCart = () => {
        addToCart({ id: productData.id, quantity: 1 });
    };

    const formattedPrice = (price: number) => price.toLocaleString('uk-UA');

    return (
        <div className={styles.productDetails}>
            <div className={styles.productDetailsColumn}>
                <ProductImageCarouselComponent images={productData.images} alt={productData.title} />
            </div>
            <div className={styles.productDetailsColumn}>
                <div className={styles.productDetailsContent}>
                    <button className={`${appStyles.button} ${styles.productDetailsBackButton}`} onClick={returnToProducts}>
                        <ArrowIconComponent className={styles.productDetailsBackButtonIcon} />
                        Back
                    </button>
                    <h2 className={styles.productDetailsTitle}>{productData.title}</h2>
                    <button className={`${appStyles.button} ${styles.productDetailsCategoryButton}`}>{productData.category.name}</button>
                    <div className={styles.productDetailsDescription}>{productData.description}</div>
                    <div className={styles.productDetailsPrice}>{formattedPrice(productData.price)} ₴</div>
                    <button
                        className={`${appStyles.button} ${styles.productDetailsAddToCartButton}`}
                        type="button"
                        onClick={addProductToCart}
                    >
                        <CartIconComponent title="Add to cart" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};
