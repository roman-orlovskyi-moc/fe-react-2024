import type { CategoryProps } from './CategoryProps.interface.tsx';

type ExcludedCategoryProps = Exclude<CategoryProps, 'image' | 'creationAt' | 'updatedAt'>;

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: ExcludedCategoryProps;
}
