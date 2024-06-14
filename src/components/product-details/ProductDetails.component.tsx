import React from 'react';
import { useNavigate } from 'react-router-dom';

import appStyles from '@/App.module.css';
import { ROUTES } from '@/constants/Routes.constant.ts';
import { formatPrice } from '@/helpers/ProductDetails.helper.tsx';
import { useCart } from '@/hooks/UseCart.hook.ts';
import type { Product } from '@/interfaces/Product.interface.ts';

import { ArrowIconComponent } from '../icon/ArrowIcon.component.tsx';
import { CartIconComponent } from '../icon/CartIcon.component.tsx';
import { ProductImageCarouselComponent } from '../product-image-carousel/ProductImageCarousel.component.tsx';

import styles from './product-details.module.css';

export const ProductDetailsComponent: React.FC<Product> = (productData) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const returnToProducts = () => {
        navigate(-1);
    };

    const navigateToProductCategory = (categoryId: number) => {
        const searchParameters = new URLSearchParams({ page: '1', category: `${categoryId}` }).toString();
        navigate(`${ROUTES.PRODUCTS}?${searchParameters}`);
    };

    const addProductToCart = () => {
        addToCart({ id: productData.id, quantity: 1 });
    };

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
                    <button
                        className={`${appStyles.button} ${styles.productDetailsCategoryButton}`}
                        onClick={() => navigateToProductCategory(productData.category.id)}
                    >
                        {productData.category.name}
                    </button>
                    <div className={styles.productDetailsDescription}>{productData.description}</div>
                    <div className={styles.productDetailsPrice}>{formatPrice(productData.price)} ₴</div>
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
