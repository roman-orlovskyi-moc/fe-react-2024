import type { AxiosResponse } from 'axios';
import axios from 'axios';

export class ApiService {
    private static INSTANCE: ApiService;
    private baseURL: string = 'https://ma-backend-api.mocintra.com/api/v1';

    private constructor() {
        axios.defaults.baseURL = this.baseURL;
    }

    public static GetInstance(): ApiService {
        if (!ApiService.INSTANCE) {
            ApiService.INSTANCE = new ApiService();
        }

        return ApiService.INSTANCE;
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
