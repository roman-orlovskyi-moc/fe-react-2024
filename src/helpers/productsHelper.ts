export const parseRouteParametersPage = (page: string | undefined): number => {
    const routeParametersPage: number | null = page ? Number.parseInt(page, 10) : null;

    return routeParametersPage && !Number.isNaN(routeParametersPage) ? routeParametersPage : 1;
};

export const parseRouteParametersSearch = (search: string | undefined): string => search || '';

export const parseRouteParametersCategories = (categories: string | undefined): number[] =>
    categories
        ? categories
              .split(',')
              .map(Number)
              .filter((categoryId) => !Number.isNaN(categoryId))
        : [];

export const parseRouteParametersSort = (sort: string | undefined): string => sort || 'price:desc';
