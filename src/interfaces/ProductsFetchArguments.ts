export interface ProductsFetchArguments {
    page: number;
    limit: number;
    search?: string;
    categoryId?: number;
    sort?: string;
}
