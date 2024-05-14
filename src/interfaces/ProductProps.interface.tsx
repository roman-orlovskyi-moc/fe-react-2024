import type { CategoryProps } from './CategoryProps.interface.tsx';

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: CategoryProps;
}
