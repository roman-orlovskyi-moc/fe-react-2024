import type { EntityStateStatus } from '../types/EntityStateStatus.type.ts';

import type { Product } from './Product.interface.ts';

export interface ProductState {
    product: Product | null | undefined;
    status: EntityStateStatus;
    error: string | null;
}
