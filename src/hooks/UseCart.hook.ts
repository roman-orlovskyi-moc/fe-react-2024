import { useContext } from 'react';

import { CartContext } from '../context/Cart.context.tsx';
import type { CartContextProps } from '../interfaces/CartContextProps.interface.ts';

export const useCart = (): CartContextProps => useContext(CartContext);
