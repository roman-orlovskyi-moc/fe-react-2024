import type { RouteParameters } from '@/types/RouteParameters.type.tsx';

import type { ColorScheme } from '../interfaces/AppContextProps.interface.tsx';
import type { Cart } from '../interfaces/Cart.interface.tsx';
import type { CartItem } from '../interfaces/CartItem.interface.tsx';

export const parseColorScheme = (): ColorScheme => {
    const savedScheme: string | null = getStoredColorScheme();
    const validColorSchemes: ColorScheme[] = ['dark', 'light'];
    const browserThemeMode: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : browserThemeMode;
};

const getStoredColorScheme = (): string | null => localStorage.getItem('themeMode');

export const updateRootColorSchemeClass = (colorScheme: ColorScheme) => {
    const removeThemeClasses: string[] = ['dark', 'light'];

    document.documentElement.classList.remove(...removeThemeClasses);
    document.documentElement.classList.add(colorScheme);
};

export const setStoredColorScheme = (colorScheme: ColorScheme) => localStorage.setItem('themeMode', colorScheme);

export const parseStoredCartData = (): Cart => {
    const savedCartData: string | null = getStoredCartData();
    const parsedCartData = savedCartData ? JSON.parse(savedCartData) : null;

    return isCartProps(parsedCartData) ? (parsedCartData as Cart) : { items: [] };
};

export const getStoredCartData = (): string | null => localStorage.getItem('cart');

const isCartItemProps = (object: any): object is CartItem => object && 'id' in object && 'quantity' in object;

const isCartProps = (object: any): object is Cart =>
    object && Array.isArray(object.items) && object.items.every((element: any) => isCartItemProps(element));

export const setStoredCartData = (cartData: Cart) => localStorage.setItem('cart', JSON.stringify(cartData));

export const prepareUpdatedCartData = (currentCart: Cart, item: CartItem): Cart => {
    const itemIndex: number = currentCart.items.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
        return { items: [...currentCart.items, item] };
    } else {
        const newCartItems = currentCart.items.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
        );

        return { items: newCartItems };
    }
};

export const prepareRoutePathParameters = (currentParameters: RouteParameters, newParameters: RouteParameters): RouteParameters => {
    if (newParameters) {
        const parameters: RouteParameters = { ...currentParameters, ...newParameters };

        Object.keys(parameters).forEach((key: string) => {
            if (!parameters[key]) {
                delete parameters[key];
            }
        });

        return parameters;
    } else {
        return {};
    }
};
