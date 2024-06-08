import type React from 'react';
import { useMemo } from 'react';

import type { CartItem } from '@/interfaces/CartItem.interface.ts';
import type { CartItemProduct } from '@/interfaces/CartItemProduct.interface.ts';

import productsJSONData from '../assets/data/products.json';

interface CartItemsProductsData {
    cartItemsProducts: CartItemProduct[] | [];
}

interface CartItemsProductsDataProviderProps {
    cartItems: CartItem[];
    children: (cartItemsProducts: CartItemsProductsData) => React.ReactNode;
}

export const CartItemsProductsDataProviderComponent: React.FC<CartItemsProductsDataProviderProps> = ({ cartItems, children }) => {
    const cartItemsProducts = useMemo(
        () =>
            cartItems.map((cartItem) => {
                const cartItemProduct = productsJSONData.find((product) => product.id === cartItem.id);
                const { id, ...cartItemWithoutId } = cartItem;

                return {
                    ...cartItemProduct,
                    ...cartItemWithoutId,
                } as CartItemProduct;
            }),
        [cartItems],
    );

    return children({ cartItemsProducts });
};
