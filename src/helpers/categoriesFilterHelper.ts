import type { CheckedCategories } from '../types/CheckedCategories.type.tsx';

export const transformCheckedCategoryIds = (checkedCategories: CheckedCategories): number[] =>
    Object.keys(checkedCategories)
        .filter((category) => checkedCategories[category])
        .map(Number)
        .filter((categoryId) => !Number.isNaN(categoryId));

export const transformCheckedCategories = (categoryIds: number[]): CheckedCategories =>
    Object.fromEntries(categoryIds.map((categoryId) => [`${categoryId}`, true]));
