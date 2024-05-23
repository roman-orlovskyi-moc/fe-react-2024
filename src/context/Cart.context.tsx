import React, { createContext, useEffect, useState } from 'react';

import { parseStoredCartData, prepareUpdatedCartData, setStoredCartData } from '@/helpers/cartContextHelper.ts';

import type { Cart } from '../interfaces/Cart.interface.tsx';
import type { CartContextProps } from '../interfaces/CartContextProps.interface.tsx';
import type { CartItem } from '../interfaces/CartItem.interface.tsx';

export const CartContext = createContext<CartContextProps>({
    cart: { items: [] },
    addToCart: (item: CartItem) => {},
});

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
