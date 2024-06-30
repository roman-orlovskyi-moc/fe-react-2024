import type { CategoriesRequestParameters } from '../interfaces/CategoriesRequestParameters.interface.ts';
import type { Category } from '../interfaces/Category.interface.ts';
import { apiService } from '../services/Api.service.ts';

export const fetchCategoriesAPI = async (limit: number): Promise<Category[]> => {
    const requestParameters: CategoriesRequestParameters = { limit };

    return apiService.get('/categories', requestParameters);
};
