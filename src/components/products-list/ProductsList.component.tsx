import React, { useEffect, useRef } from 'react';

import type { Product } from '@/interfaces/Product.interface.ts';

import { ProductCardComponent } from '../product-card/ProductCard.component.tsx';

import styles from './products-list.module.css';

interface ProductsListProps {
    products: Product[];
    productsTotalCount: number;
    isInfiniteScroll: boolean;
    loadNextPageProductsData: () => void;
}

export const ProductsListComponent: React.FC<ProductsListProps> = ({
    products,
    productsTotalCount,
    isInfiniteScroll,
    loadNextPageProductsData,
}) => {
    const lastProductCardReference = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        const currentProductCardReference = lastProductCardReference.current;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && isInfiniteScroll && products.length < productsTotalCount) {
                    loadNextPageProductsData();
                    observer.disconnect();
                }
            },
            { threshold: 1 },
        );

        if (currentProductCardReference) {
            observer.observe(currentProductCardReference);
        }

        return () => observer.disconnect();
    }, [products, productsTotalCount, isInfiniteScroll, loadNextPageProductsData]);

    return (
        <>
            {products.length > 0 ? (
                <ul className={styles.productsList}>
                    {products.map((productData: Product, index: number) => (
                        <li
                            className={styles.productListItem}
                            key={productData.id}
                            ref={index === products.length - 2 ? lastProductCardReference : null}
                        >
                            <ProductCardComponent {...productData} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.productsListEmpty}>No products found</p>
            )}
        </>
    );
};
