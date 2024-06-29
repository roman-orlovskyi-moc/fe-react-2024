import type { Product } from './Product.interface.ts';
import type { ProductsFetchArguments } from './ProductsFetchArguments.ts';

export interface ProductsState {
    products: Product[] | undefined;
    productsTotal: number;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    isMergeNewDataWithPrevious?: boolean;
    productsFetchArguments: ProductsFetchArguments;
}
