import React, { useContext } from 'react';

import appStyles from '@/App.module.css';
import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps } from '@/interfaces/AppContextProps.interface.tsx';
import type { ProductProps } from '@/interfaces/ProductProps.interface.tsx';

import { CartIconComponent } from '../icon/CartIcon.component.tsx';
import { PreviousButtonIconComponent } from '../icon/PreviousButtonIcon.component.tsx';
import { ProductImageCarouselComponent } from '../product-image-carousel/ProductImageCarousel.component.tsx';

import styles from './product-details.module.css';

export const ProductDetailsComponent: React.FC<ProductProps> = (productData) => {
    const appContext: AppContextProps = useContext(AppContext);

    const returnToProducts = () => {
        appContext.backToPreviousRoute('/products');
    };

    const addToCart = () => {
        appContext.addToCart({ id: productData.id, quantity: 1 });
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
                        <PreviousButtonIconComponent className={styles.productDetailsBackButtonIcon} />
                        Back
                    </button>
                    <h2 className={styles.productDetailsTitle}>{productData.title}</h2>
                    <button className={`${appStyles.button} ${styles.productDetailsCategoryButton}`}>{productData.category.name}</button>
                    <div className={styles.productDetailsDescription}>{productData.description}</div>
                    <div className={styles.productDetailsPrice}>{formattedPrice(productData.price)} ₴</div>
                    <button className={`${appStyles.button} ${styles.productDetailsAddToCartButton}`} type="button" onClick={addToCart}>
                        <CartIconComponent title="Add to cart" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};
