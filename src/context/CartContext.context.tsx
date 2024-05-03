import React, { createContext, useEffect, useState } from 'react';

import type { CartItemProps } from '@/interfaces/CartItemProps.interface.tsx';
import type { CartProps } from '@/interfaces/CartProps.interface.tsx';

interface CartContextProps {
    cart: CartProps;
    addToCart: (item: CartItemProps) => void;
}

export const CartContext = createContext<CartContextProps>({
    cart: { items: [] },
    addToCart: (item) => {},
});

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartProps>(() => {
        const savedCartData = localStorage.getItem('cart');

        return savedCartData ? (JSON.parse(savedCartData) as CartProps) : { items: [] };
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItemProps) => {
        const itemIndex = cart.items.findIndex((cartItem) => cartItem.id === item.id);

        if (itemIndex === -1) {
            setCart({ items: [...cart.items, item] });
        } else {
            const newCartItems = cart.items.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
            );

            setCart({ items: newCartItems });
        }
    };

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};
