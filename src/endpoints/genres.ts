/**
 * @fileoverview Genres endpoint class for accessing genre-related data from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
import { 
    AnimeGenresResponse,
    MangaGenresResponse
} from "../types/genres";
import JikanResponse from "../types/common";

/**
 * Genres endpoint class providing methods to access genre-related data
 * @class Genres
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const animeGenres = await jikan.genres.getAnimeGenres();
 * const mangaGenres = await jikan.genres.getMangaGenres();
 * ```
 */
export class Genres {
    /**
     * Creates a new Genres endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves all available anime genres
     * @returns {Promise<JikanResponse<AnimeGenresResponse>>} Promise that resolves to anime genres
     * @example
     * ```typescript
     * const genres = await jikan.genres.getAnimeGenres();
     * genres.data.forEach(genre => {
     *   console.log(`${genre.name} (${genre.count} anime)`);
     * });
     * ```
     */
    async getAnimeGenres(): Promise<JikanResponse<AnimeGenresResponse>> {
        return this.client.get<AnimeGenresResponse>('genres/anime');
    }

    /**
     * Retrieves all available manga genres
     * @returns {Promise<JikanResponse<MangaGenresResponse>>} Promise that resolves to manga genres
     * @example
     * ```typescript
     * const genres = await jikan.genres.getMangaGenres();
     * genres.data.forEach(genre => {
     *   console.log(`${genre.name} (${genre.count} manga)`);
     * });
     * ```
     */
    async getMangaGenres(): Promise<JikanResponse<MangaGenresResponse>> {
        return this.client.get<MangaGenresResponse>('genres/manga');
    }
}