import { URL } from 'url';

class JikanHttpClient {
    constructor(private baseUrl: string = "https://api.jikan.moe/v4") {}
    async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
        const url = new URL(endpoint, this.baseUrl);
    
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                url.searchParams.append(key, String(value));
                }
            });
        }

        const response = await fetch(url.toString());
        
        if (!response.ok) {
            throw new Error(`Jikan API error: ${response.status} ${response.statusText}`);
        }

        return response.json() as T;
    }
}

export default JikanHttpClient;