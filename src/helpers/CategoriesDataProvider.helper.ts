import type { CategoriesRequestParameters } from '../interfaces/CategoriesRequestParameters.interface.ts';
import type { Category } from '../interfaces/Category.interface.ts';
import { ApiService } from '../services/Api.service.ts';

export const fetchCategories = async (limit: number): Promise<Category[]> => {
    const requestParameters: CategoriesRequestParameters = { limit };

    return ApiService.GetInstance().get('/categories', requestParameters);
};
