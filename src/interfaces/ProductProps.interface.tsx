import type { Category } from './Category.interface.tsx';

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: Category;
}
