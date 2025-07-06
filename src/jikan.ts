/**
 * @fileoverview Main Jikan API client class
 */

import JikanHttpClient from "./client/http-client";
import { Anime } from "./endpoints/anime";

/**
 * Main Jikan API client class that provides access to various endpoints
 * @class Jikan
 * @example
 * ```typescript
 * import Jikan from 'jikan-api.js';
 * 
 * const jikan = new Jikan();
 * const anime = await jikan.anime.getAnimeByFullId(1);
 * ```
 */
class Jikan {
    /**
     * Base URL for the Jikan API
     * @private
     */
    private _baseUrl: string = "https://api.jikan.moe/v4";
    
    /**
     * HTTP client instance for making API requests
     * @public
     */
    client: JikanHttpClient;
    
    /**
     * Anime endpoint accessor
     * @public
     */
    anime: Anime;
    
    /**
     * Creates a new Jikan API client instance
     * @param {string} [baseUrl] - Custom base URL for the API (optional)
     * @example
     * ```typescript
     * // Using default Jikan API URL
     * const jikan = new Jikan();
     * 
     * // Using custom base URL
     * const jikan = new Jikan('https://custom-api.example.com/v4');
     * ```
     */
    constructor(baseUrl?: string) {
        if (baseUrl) {
            this._baseUrl = baseUrl;
        }
        this.client = new JikanHttpClient(this._baseUrl);
        this.anime = new Anime(this.client);
    }
}

export default Jikan;