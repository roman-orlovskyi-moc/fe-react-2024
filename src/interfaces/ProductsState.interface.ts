import type { EntityStateStatus } from '../types/EntityStateStatus.type.ts';

import type { Product } from './Product.interface.ts';
import type { ProductsFetchArguments } from './ProductsFetchArguments.ts';

export interface ProductsState {
    products: Product[] | undefined;
    productsTotal: number;
    status: EntityStateStatus;
    error: string | null;
    isInfiniteScroll: boolean;
    productsFetchArguments: ProductsFetchArguments;
}
