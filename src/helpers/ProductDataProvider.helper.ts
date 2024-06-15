import type { Product } from '../interfaces/Product.interface.ts';
import { ApiService } from '../services/Api.service.ts';

export const fetchProduct = async (id: number): Promise<Product> => ApiService.GetInstance().get(`/products/${id}`);
