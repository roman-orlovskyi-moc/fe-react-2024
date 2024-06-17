import type { ProductsFilter } from '../interfaces/ProductsFilter.interface.ts';

export const parseRouteFilters = (searchParameters: URLSearchParams): ProductsFilter => {
    const page = parseRouteParametersPage(searchParameters.get('page'));
    const search = parseRouteParametersSearch(searchParameters.get('search'));
    const categoryId = parseRouteParametersCategory(searchParameters.get('category'));
    const sort = parseRouteParametersSort(searchParameters.get('sort'));

    const filters = { page, search, sort };

    return categoryId ? { ...filters, categoryId } : { ...filters };
};

export const parseRouteParametersPage = (page: string | null): number => {
    const routeParametersPage: number | null = page ? Number.parseInt(page, 10) : null;

    return routeParametersPage && !Number.isNaN(routeParametersPage) ? routeParametersPage : 1;
};

export const parseRouteParametersSearch = (search: string | null): string => search || '';

export const parseRouteParametersCategory = (category: string | null): number | null => {
    const routeParametersCategory: number | null = category ? Number.parseInt(category, 10) : null;

    return routeParametersCategory && !Number.isNaN(routeParametersCategory) ? routeParametersCategory : null;
};

export const parseRouteParametersSort = (sort: string | null): string => sort || 'desc';

export const setCurrentPageSearchParameter = (searchParameters: URLSearchParams, page: number): URLSearchParams => {
    searchParameters.set('page', page.toString());

    return searchParameters;
};

export const setSearchQuerySearchParameter = (searchParameters: URLSearchParams, search: string): URLSearchParams => {
    searchParameters.set('page', '1');
    searchParameters.set('search', search);

    return searchParameters;
};

export const setCategorySearchParameter = (searchParameters: URLSearchParams, categoryId: number): URLSearchParams => {
    searchParameters.set('page', '1');
    searchParameters.set('category', categoryId.toString());

    return searchParameters;
};

export const setSortOrderSearchParameter = (searchParameters: URLSearchParams, sort: string): URLSearchParams => {
    searchParameters.set('page', '1');
    searchParameters.set('sort', sort);

    return searchParameters;
};
