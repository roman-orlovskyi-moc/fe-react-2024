import type { Product } from './Product.interface.ts';

export interface ProductsResponse {
    products: Product[];
    total: number;
}
