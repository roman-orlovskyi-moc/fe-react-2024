import React from 'react';

import { CartItemsProductsDataProviderComponent } from '@/data-providers/CartItemsProductsDataProvider.component.tsx';
import { useCart } from '@/hooks/UseCart.hook.ts';

import { CartItemComponent } from '../cart-item/CartItem.component.tsx';

import styles from './cart-items.module.css';

export const CartItemsComponent: React.FC = () => {
    const { cart } = useCart();

    return (
        <CartItemsProductsDataProviderComponent cartItems={cart.items}>
            {({ cartItemsProducts }) => (
                <ul className={styles.cartItems}>
                    {cartItemsProducts.map((cartItemProduct) => (
                        <li key={cartItemProduct.id}>
                            <CartItemComponent cartItemProduct={cartItemProduct} />
                        </li>
                    ))}
                </ul>
            )}
        </CartItemsProductsDataProviderComponent>
    );
};
