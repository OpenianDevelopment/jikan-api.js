/**
 * @fileoverview Recommendations endpoint class for accessing recommendation data from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
import { 
    AnimeRecommendationResponse,
    MangaRecommendationResponse
} from "../types/recommendations";
import JikanResponse from "../types/common";

/**
 * Recommendations endpoint class providing methods to access recommendation data
 * @class Recommendations
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const animeRecs = await jikan.recommendations.getRecentAnimeRecommendations();
 * const mangaRecs = await jikan.recommendations.getRecentMangaRecommendations();
 * ```
 */
export class Recommendations {
    /**
     * Creates a new Recommendations endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves recent anime recommendations
     * @param {number} [page=1] - Page number for pagination
     * @returns {Promise<JikanResponse<AnimeRecommendationResponse>>} Promise that resolves to anime recommendation data
     * @example
     * ```typescript
     * const recommendations = await jikan.recommendations.getRecentAnimeRecommendations();
     * recommendations.data.forEach(rec => {
     *   console.log(`${rec.entry[0].title} recommended with ${rec.entry[1].title}`);
     *   console.log(`Recommendation: ${rec.content}`);
     * });
     * ```
     */
    async getRecentAnimeRecommendations(page: number = 1): Promise<JikanResponse<AnimeRecommendationResponse>> {
        const params = new URLSearchParams();
        if (page > 1) {
            params.append('page', page.toString());
        }
        
        const url = `recommendations/anime${params.toString() ? `?${params.toString()}` : ''}`;
        return this.client.get<AnimeRecommendationResponse>(url);
    }

    /**
     * Retrieves recent manga recommendations
     * @param {number} [page=1] - Page number for pagination
     * @returns {Promise<JikanResponse<MangaRecommendationResponse>>} Promise that resolves to manga recommendation data
     * @example
     * ```typescript
     * const recommendations = await jikan.recommendations.getRecentMangaRecommendations();
     * recommendations.data.forEach(rec => {
     *   console.log(`${rec.entry[0].title} recommended with ${rec.entry[1].title}`);
     *   console.log(`By: ${rec.user.username}`);
     * });
     * ```
     */
    async getRecentMangaRecommendations(page: number = 1): Promise<JikanResponse<MangaRecommendationResponse>> {
        const params = new URLSearchParams();
        if (page > 1) {
            params.append('page', page.toString());
        }
        
        const url = `recommendations/manga${params.toString() ? `?${params.toString()}` : ''}`;
        return this.client.get<MangaRecommendationResponse>(url);
    }
}