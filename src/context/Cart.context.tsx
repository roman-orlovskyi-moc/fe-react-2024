import React, { createContext, useEffect, useState } from 'react';

import {
    parseStoredCartData,
    prepareRemovedCartItemCartData,
    prepareUpdatedCartData,
    prepareUpdatedCartItemQuantityCartData,
    setStoredCartData,
} from '@/helpers/CartContext.helper.ts';

import type { Cart } from '../interfaces/Cart.interface.ts';
import type { CartContextProps } from '../interfaces/CartContextProps.interface.ts';
import type { CartItem } from '../interfaces/CartItem.interface.ts';

export const CartContext = createContext<CartContextProps>({
    cart: { items: [] },
    addToCart: (item: CartItem) => {},
    updateCartItemQuantity: (itemId: number, newQuantity: number) => {},
    removeCartItem: (itemId: number) => {},
    clearCart: () => {},
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

    const updateCartItemQuantity = (itemId: number, newQuantity: number) => {
        setCart((currentCart: Cart) => prepareUpdatedCartItemQuantityCartData(currentCart, itemId, newQuantity));
    };

    const removeCartItem = (itemId: number) => {
        setCart((currentCart: Cart) => prepareRemovedCartItemCartData(currentCart, itemId));
    };

    const clearCart = () => {
        setCart({ items: [] });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity, removeCartItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
