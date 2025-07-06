/**
 * @fileoverview Manga endpoint class for accessing manga-related data from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
import { 
    MangaResponse,
    MangaCharacterResponse,
    MangaNewsResponse,
    MangaForumResponse,
    MangaPictureResponse,
    MangaStatisticsResponse,
    MangaRecommendationResponse,
    MangaUserUpdateResponse,
    MangaReviewResponse,
    MangaRelationResponse,
    MangaExternalResponse
} from "../types/manga";
import JikanResponse from "../types/common";

/**
 * Manga endpoint class providing methods to access manga-related data
 * @class Manga
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const manga = await jikan.manga.getMangaByFullId(1);
 * const characters = await jikan.manga.getMangaCharacters(1);
 * ```
 */
export class Manga {
    /**
     * Creates a new Manga endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves manga information by MyAnimeList ID
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaResponse>>} Promise that resolves to manga data
     * @example
     * ```typescript
     * const manga = await jikan.manga.getMangaByFullId(1);
     * console.log(manga.data.title);
     * ```
     */
    getMangaByFullId(id: number): Promise<JikanResponse<MangaResponse>> {
        return this.client.get<JikanResponse<MangaResponse>>(`/manga/${id}/full`);
    }

    /**
     * Retrieves basic manga information by MyAnimeList ID
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaResponse>>} Promise that resolves to manga data
     * @example
     * ```typescript
     * const manga = await jikan.manga.getMangaById(1);
     * console.log(manga.data.title);
     * ```
     */
    getMangaById(id: number): Promise<JikanResponse<MangaResponse>> {
        return this.client.get<JikanResponse<MangaResponse>>(`/manga/${id}`);
    }

    /**
     * Retrieves character information for a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaCharacterResponse[]>>} Promise that resolves to character data
     * @example
     * ```typescript
     * const characters = await jikan.manga.getMangaCharacters(1);
     * console.log(characters.data[0].character.name);
     * ```
     */
    getMangaCharacters(id: number): Promise<JikanResponse<MangaCharacterResponse[]>> {
        return this.client.get<JikanResponse<MangaCharacterResponse[]>>(`/manga/${id}/characters`);
    }

    /**
     * Retrieves news articles related to a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @param {number} [page] - Page number for pagination (optional)
     * @returns {Promise<JikanResponse<MangaNewsResponse[]>>} Promise that resolves to news data
     * @example
     * ```typescript
     * const news = await jikan.manga.getMangaNews(1);
     * console.log(news.data[0].title);
     * ```
     */
    getMangaNews(id: number, page?: number): Promise<JikanResponse<MangaNewsResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<MangaNewsResponse[]>>(`/manga/${id}/news${params}`);
    }

    /**
     * Retrieves forum topics related to a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaForumResponse[]>>} Promise that resolves to forum data
     * @example
     * ```typescript
     * const forum = await jikan.manga.getMangaForum(1);
     * console.log(forum.data[0].title);
     * ```
     */
    getMangaForum(id: number): Promise<JikanResponse<MangaForumResponse[]>> {
        return this.client.get<JikanResponse<MangaForumResponse[]>>(`/manga/${id}/forum`);
    }

    /**
     * Retrieves pictures/images for a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaPictureResponse[]>>} Promise that resolves to picture data
     * @example
     * ```typescript
     * const pictures = await jikan.manga.getMangaPictures(1);
     * console.log(pictures.data[0].large_image_url);
     * ```
     */
    getMangaPictures(id: number): Promise<JikanResponse<MangaPictureResponse[]>> {
        return this.client.get<JikanResponse<MangaPictureResponse[]>>(`/manga/${id}/pictures`);
    }

    /**
     * Retrieves statistics for a specific manga (user counts, scores, etc.)
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaStatisticsResponse>>} Promise that resolves to statistics data
     * @example
     * ```typescript
     * const stats = await jikan.manga.getMangaStatistics(1);
     * console.log(stats.data.reading);
     * ```
     */
    getMangaStatistics(id: number): Promise<JikanResponse<MangaStatisticsResponse>> {
        return this.client.get<JikanResponse<MangaStatisticsResponse>>(`/manga/${id}/statistics`);
    }

    /**
     * Retrieves additional information for a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<{ moreinfo: string }>>} Promise that resolves to additional info
     * @example
     * ```typescript
     * const moreInfo = await jikan.manga.getMangaMoreInfo(1);
     * console.log(moreInfo.data.moreinfo);
     * ```
     */
    getMangaMoreInfo(id: number): Promise<JikanResponse<{ moreinfo: string }>> {
        return this.client.get<JikanResponse<{ moreinfo: string }>>(`/manga/${id}/moreinfo`);
    }

    /**
     * Retrieves manga recommendations for a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaRecommendationResponse[]>>} Promise that resolves to recommendation data
     * @example
     * ```typescript
     * const recommendations = await jikan.manga.getMangaRecommendations(1);
     * console.log(recommendations.data[0].entry.title);
     * ```
     */
    getMangaRecommendations(id: number): Promise<JikanResponse<MangaRecommendationResponse[]>> {
        return this.client.get<JikanResponse<MangaRecommendationResponse[]>>(`/manga/${id}/recommendations`);
    }

    /**
     * Retrieves recent user updates for a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @param {number} [page] - Page number for pagination (optional)
     * @returns {Promise<JikanResponse<MangaUserUpdateResponse[]>>} Promise that resolves to user update data
     * @example
     * ```typescript
     * const updates = await jikan.manga.getMangaUserUpdates(1);
     * console.log(updates.data[0].user.username);
     * ```
     */
    getMangaUserUpdates(id: number, page?: number): Promise<JikanResponse<MangaUserUpdateResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<MangaUserUpdateResponse[]>>(`/manga/${id}/userupdates${params}`);
    }

    /**
     * Retrieves user reviews for a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @param {number} [page] - Page number for pagination (optional)
     * @param {boolean} [preliminary] - Whether to include preliminary reviews (optional)
     * @param {boolean} [spoilers] - Whether to include spoiler reviews (optional)
     * @returns {Promise<JikanResponse<MangaReviewResponse[]>>} Promise that resolves to review data
     * @example
     * ```typescript
     * const reviews = await jikan.manga.getMangaReviews(1);
     * console.log(reviews.data[0].review);
     * ```
     */
    getMangaReviews(id: number, page?: number, preliminary?: boolean, spoilers?: boolean): Promise<JikanResponse<MangaReviewResponse[]>> {
        const params = new URLSearchParams();
        if (page) params.append('page', page.toString());
        if (preliminary !== undefined) params.append('preliminary', preliminary.toString());
        if (spoilers !== undefined) params.append('spoilers', spoilers.toString());
        const queryString = params.toString();
        return this.client.get<JikanResponse<MangaReviewResponse[]>>(`/manga/${id}/reviews${queryString ? `?${queryString}` : ''}`);
    }

    /**
     * Retrieves related manga for a specific manga (sequels, prequels, etc.)
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaRelationResponse[]>>} Promise that resolves to relation data
     * @example
     * ```typescript
     * const relations = await jikan.manga.getMangaRelations(1);
     * console.log(relations.data[0].relation);
     * ```
     */
    getMangaRelations(id: number): Promise<JikanResponse<MangaRelationResponse[]>> {
        return this.client.get<JikanResponse<MangaRelationResponse[]>>(`/manga/${id}/relations`);
    }

    /**
     * Retrieves external links for a specific manga
     * @param {number} id - MyAnimeList ID of the manga
     * @returns {Promise<JikanResponse<MangaExternalResponse[]>>} Promise that resolves to external link data
     * @example
     * ```typescript
     * const external = await jikan.manga.getMangaExternal(1);
     * console.log(external.data[0].url);
     * ```
     */
    getMangaExternal(id: number): Promise<JikanResponse<MangaExternalResponse[]>> {
        return this.client.get<JikanResponse<MangaExternalResponse[]>>(`/manga/${id}/external`);
    }

    /**
     * Searches for manga based on various criteria
     * @param {Object} [params={}] - Search parameters
     * @param {string} [params.q] - Search query
     * @param {string} [params.type] - Manga type (Manga, Light Novel, One-shot, Doujinshi, Manhwa, Manhua, Novel)
     * @param {number} [params.score] - Score
     * @param {number} [params.min_score] - Minimum score
     * @param {number} [params.max_score] - Maximum score
     * @param {string} [params.status] - Publishing status
     * @param {boolean} [params.sfw] - Safe for work filter
     * @param {string} [params.genres] - Comma-separated genre IDs
     * @param {string} [params.genres_exclude] - Comma-separated genre IDs to exclude
     * @param {string} [params.order_by] - Field to order by
     * @param {string} [params.sort] - Sort direction (asc, desc)
     * @param {string} [params.letter] - Letter to filter by
     * @param {string} [params.magazines] - Comma-separated magazine IDs
     * @param {string} [params.start_date] - Start date (YYYY-MM-DD)
     * @param {string} [params.end_date] - End date (YYYY-MM-DD)
     * @param {number} [params.page] - Page number
     * @param {number} [params.limit] - Results per page
     * @returns {Promise<JikanResponse<MangaResponse[]>>} Promise that resolves to search results
     * @example
     * ```typescript
     * const results = await jikan.manga.searchManga({ q: 'Naruto', type: 'Manga' });
     * const topManga = await jikan.manga.searchManga({ order_by: 'score', sort: 'desc' });
     * ```
     */
    searchManga(params: {
        q?: string;
        type?: string;
        score?: number;
        min_score?: number;
        max_score?: number;
        status?: string;
        sfw?: boolean;
        genres?: string;
        genres_exclude?: string;
        order_by?: string;
        sort?: string;
        letter?: string;
        magazines?: string;
        start_date?: string;
        end_date?: string;
        page?: number;
        limit?: number;
    } = {}): Promise<JikanResponse<MangaResponse[]>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        const queryString = queryParams.toString();
        return this.client.get<JikanResponse<MangaResponse[]>>(`/manga${queryString ? `?${queryString}` : ''}`);
    }
}