import type { Product } from '../interfaces/Product.interface.ts';
import { apiService } from '../services/Api.service.ts';

export const fetchProduct = async (id: number): Promise<Product> => apiService.get(`/products/${id}`);
