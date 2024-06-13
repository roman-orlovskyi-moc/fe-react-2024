import type { ProductsResponse } from '@/interfaces/ProductsResponse.interface.ts';

import type { ProductsRequestParameters } from '../interfaces/ProductsRequestParameters.interface.ts';
import { ApiService } from '../services/Api.service.ts';

export const fetchProducts = async (
    page: number,
    limit: number,
    search?: string,
    categoryIds?: number[],
    sort?: string,
): Promise<ProductsResponse> => {
    const requestParameters: ProductsRequestParameters = { limit, offset: (page - 1) * limit };

    if (search) {
        requestParameters.title = search;
    }

    if (categoryIds && categoryIds.length > 0) {
        requestParameters.categoryId = categoryIds[0];
    }

    if (sort) {
        requestParameters.sortOrder = sort;
    }

    return ApiService.GetInstance().get('/products', requestParameters);
};
