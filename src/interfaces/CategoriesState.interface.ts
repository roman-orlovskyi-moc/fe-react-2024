import type { EntityStateStatus } from '../types/EntityStateStatus.type.ts';

import type { Category } from './Category.interface.ts';

export interface CategoriesState {
    categories: Category[];
    currentCategoryId: number | null;
    status: EntityStateStatus;
    error: string | null;
}
