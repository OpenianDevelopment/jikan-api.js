/**
 * @fileoverview Main Jikan API client class
 */

import JikanHttpClient from "./client/http-client";
import { Anime } from "./endpoints/anime";
import { Manga } from "./endpoints/manga";
import { Characters } from "./endpoints/characters";

/**
 * Main Jikan API client class that provides access to various endpoints
 * @class Jikan
 * @example
 * ```typescript
 * import Jikan from 'jikan-api.js';
 * 
 * const jikan = new Jikan();
 * const anime = await jikan.anime.getAnimeByFullId(1);
 * const manga = await jikan.manga.getMangaByFullId(1);
 * const character = await jikan.characters.getCharacterByFullId(1);
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
     * Manga endpoint accessor
     * @public
     */
    manga: Manga;
    
    /**
     * Characters endpoint accessor
     * @public
     */
    characters: Characters;
    
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
        this.manga = new Manga(this.client);
        this.characters = new Characters(this.client);
    }
}

export default Jikan;