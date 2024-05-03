import React, { createContext, useEffect, useState } from 'react';

import type { CartItemProps } from '@/interfaces/CartItemProps.interface.tsx';
import type { CartProps } from '@/interfaces/CartProps.interface.tsx';

interface AppContextProps {
    cart: CartProps;
    addToCart: (item: CartItemProps) => void;
}

export const AppContext = createContext<AppContextProps>({
    cart: { items: [] },
    addToCart: (item) => {},
});

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
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

    return <AppContext.Provider value={{ cart, addToCart }}>{children}</AppContext.Provider>;
};
