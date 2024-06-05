import type { ProductsFilter } from '../interfaces/ProductsFilter.interface.ts';

export const parseRouteFilters = (searchParameters: URLSearchParams): ProductsFilter => {
    const page = parseRouteParametersPage(searchParameters.get('page'));
    const search = parseRouteParametersSearch(searchParameters.get('search'));
    const categoryIds = parseRouteParametersCategories(searchParameters.get('categories'));
    const sort = parseRouteParametersSort(searchParameters.get('sort'));

    return { page, search, categoryIds, sort };
};

export const parseRouteParametersPage = (page: string | null): number => {
    const routeParametersPage: number | null = page ? Number.parseInt(page, 10) : null;

    return routeParametersPage && !Number.isNaN(routeParametersPage) ? routeParametersPage : 1;
};

export const parseRouteParametersSearch = (search: string | null): string => search || '';

export const parseRouteParametersCategories = (categories: string | null): number[] =>
    categories
        ? categories
              .split(',')
              .map(Number)
              .filter((categoryId) => !Number.isNaN(categoryId))
        : [];

export const parseRouteParametersSort = (sort: string | null): string => sort || 'price:desc';
