import type { ProductsRequestParameters } from '../interfaces/ProductsRequestParameters.interface.ts';
import type { ProductsResponse } from '../interfaces/ProductsResponse.interface.ts';
import { apiService } from '../services/Api.service.ts';

export const fetchProductsAPI = async (
    page: number,
    limit: number,
    search?: string,
    categoryId?: number,
    sort?: string,
): Promise<ProductsResponse> => {
    const requestParameters: ProductsRequestParameters = { limit, offset: (page - 1) * limit };

    if (search) {
        requestParameters.title = search;
    }

    if (categoryId) {
        requestParameters.categoryId = categoryId;
    }

    if (sort) {
        requestParameters.sortOrder = sort;
    }

    return apiService.get('/products', requestParameters);
};
