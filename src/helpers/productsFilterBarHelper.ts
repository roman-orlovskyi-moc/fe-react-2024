import type { CheckedCategoriesProps } from '../types/CheckedCategoriesProps.type.tsx';

export const transformCheckedCategoryIds = (checkedCategories: CheckedCategoriesProps): number[] =>
    Object.keys(checkedCategories)
        .filter((category) => checkedCategories[category])
        .map(Number)
        .filter((categoryId) => !Number.isNaN(categoryId));

export const transformCheckedCategories = (categoryIds: number[]): CheckedCategoriesProps =>
    Object.fromEntries(categoryIds.map((categoryId) => [`${categoryId}`, true]));
