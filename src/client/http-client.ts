/**
 * @fileoverview HTTP client for making requests to the Jikan API
 */

import { URL } from 'url';

/**
 * HTTP client class for making requests to the Jikan API
 * @class JikanHttpClient
 */
class JikanHttpClient {
    /**
     * Creates a new HTTP client instance
     * @param {string} baseUrl - Base URL for the API requests
     */
    constructor(private baseUrl: string = "https://api.jikan.moe/v4") {}
    
    /**
     * Makes a GET request to the specified endpoint
     * @template T - Expected response type
     * @param {string} endpoint - API endpoint path
     * @param {Record<string, any>} [params] - Query parameters to include in the request
     * @returns {Promise<T>} Promise that resolves to the API response
     * @throws {Error} Throws an error if the API request fails
     * @example
     * ```typescript
     * const client = new JikanHttpClient();
     * const response = await client.get<AnimeResponse>('/anime/1');
     * ```
     */
    async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
        const url = new URL(endpoint, this.baseUrl);
    
        // Add query parameters if provided
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                url.searchParams.append(key, String(value));
                }
            });
        }

        const response = await fetch(url.toString());
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Jikan API error: ${response.status} ${response.statusText}`);
        }

        return response.json() as T;
    }
}

export default JikanHttpClient;