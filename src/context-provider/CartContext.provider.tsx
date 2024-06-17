import React, { useEffect, useState } from 'react';

import { parseStoredCartData, prepareUpdatedCartData, setStoredCartData } from '@/helpers/CartContext.helper.ts';

import { CartContext } from '../context/Cart.context.ts';
import type { Cart } from '../interfaces/Cart.interface.ts';
import type { CartItem } from '../interfaces/CartItem.interface.ts';

interface CartContextProviderProps {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Cart>(() => parseStoredCartData());

    useEffect(() => {
        setStoredCartData(cart);
    }, [cart]);

    const addToCart = (item: CartItem) => setCart((currentCart: Cart) => prepareUpdatedCartData(currentCart, item));

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};
