import { toast } from 'react-toastify';

import type { AxiosResponse } from 'axios';
import axios from 'axios';

export class ApiService {
    private baseURL: string = 'https://ma-backend-api.mocintra.com/api/v1';

    public constructor() {
        axios.defaults.baseURL = this.baseURL;
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                toast.error(error.message);
                return Promise.reject(error);
            },
        );
    }

    public async get<T = any>(url: string, parameters?: any): Promise<T> {
        try {
            const response: AxiosResponse = await axios.get<T>(url, { params: parameters });

            return response.data as T;
        } catch (error) {
            console.error('Error occurred while making GET request:', error);
            throw error;
        }
    }
}

export const apiService = new ApiService();
