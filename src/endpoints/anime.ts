/**
 * @fileoverview Anime endpoint class for accessing anime-related data from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
import { 
    AnimeResponse,
    AnimeCharacterResponse,
    AnimeStaffResponse,
    AnimeEpisodeResponse,
    AnimeNewsResponse,
    AnimeForumResponse,
    AnimeVideoResponse,
    AnimePictureResponse,
    AnimeStatisticsResponse,
    AnimeRecommendationResponse,
    AnimeUserUpdateResponse,
    AnimeReviewResponse,
    AnimeRelationResponse,
    AnimeThemeResponse,
    AnimeExternalResponse,
    AnimeStreamingResponse
} from "../types/anime";
import JikanResponse from "../types/common";

/**
 * Anime endpoint class providing methods to access anime-related data
 * @class Anime
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const anime = await jikan.anime.getAnimeByFullId(1);
 * const characters = await jikan.anime.getAnimeCharacters(1);
 * ```
 */
export class Anime {
    /**
     * Creates a new Anime endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves anime information by MyAnimeList ID
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeResponse>>} Promise that resolves to anime data
     * @example
     * ```typescript
     * const anime = await jikan.anime.getAnimeByFullId(1);
     * console.log(anime.data.title);
     * ```
     */
    getAnimeByFullId(id: number): Promise<JikanResponse<AnimeResponse>> {
        return this.client.get<JikanResponse<AnimeResponse>>(`/anime/${id}`);
    }

    /**
     * Retrieves character information for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeCharacterResponse[]>>} Promise that resolves to character data
     * @example
     * ```typescript
     * const characters = await jikan.anime.getAnimeCharacters(1);
     * console.log(characters.data[0].character.name);
     * ```
     */
    getAnimeCharacters(id: number): Promise<JikanResponse<AnimeCharacterResponse[]>> {
        return this.client.get<JikanResponse<AnimeCharacterResponse[]>>(`/anime/${id}/characters`);
    }

    /**
     * Retrieves staff information for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeStaffResponse[]>>} Promise that resolves to staff data
     * @example
     * ```typescript
     * const staff = await jikan.anime.getAnimeStaff(1);
     * console.log(staff.data[0].person.name);
     * ```
     */
    getAnimeStaff(id: number): Promise<JikanResponse<AnimeStaffResponse[]>> {
        return this.client.get<JikanResponse<AnimeStaffResponse[]>>(`/anime/${id}/staff`);
    }

    /**
     * Retrieves episode information for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @param {number} [page] - Page number for pagination (optional)
     * @returns {Promise<JikanResponse<AnimeEpisodeResponse[]>>} Promise that resolves to episode data
     * @example
     * ```typescript
     * const episodes = await jikan.anime.getAnimeEpisodes(1);
     * const episodesPage2 = await jikan.anime.getAnimeEpisodes(1, 2);
     * ```
     */
    getAnimeEpisodes(id: number, page?: number): Promise<JikanResponse<AnimeEpisodeResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<AnimeEpisodeResponse[]>>(`/anime/${id}/episodes${params}`);
    }

    /**
     * Retrieves information for a specific episode of an anime
     * @param {number} id - MyAnimeList ID of the anime
     * @param {number} episodeId - Episode number
     * @returns {Promise<JikanResponse<AnimeEpisodeResponse>>} Promise that resolves to episode data
     * @example
     * ```typescript
     * const episode = await jikan.anime.getAnimeEpisodeById(1, 1);
     * console.log(episode.data.title);
     * ```
     */
    getAnimeEpisodeById(id: number, episodeId: number): Promise<JikanResponse<AnimeEpisodeResponse>> {
        return this.client.get<JikanResponse<AnimeEpisodeResponse>>(`/anime/${id}/episodes/${episodeId}`);
    }

    /**
     * Retrieves news articles related to a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @param {number} [page] - Page number for pagination (optional)
     * @returns {Promise<JikanResponse<AnimeNewsResponse[]>>} Promise that resolves to news data
     * @example
     * ```typescript
     * const news = await jikan.anime.getAnimeNews(1);
     * console.log(news.data[0].title);
     * ```
     */
    getAnimeNews(id: number, page?: number): Promise<JikanResponse<AnimeNewsResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<AnimeNewsResponse[]>>(`/anime/${id}/news${params}`);
    }

    /**
     * Retrieves forum topics related to a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeForumResponse[]>>} Promise that resolves to forum data
     * @example
     * ```typescript
     * const forum = await jikan.anime.getAnimeForum(1);
     * console.log(forum.data[0].title);
     * ```
     */
    getAnimeForum(id: number): Promise<JikanResponse<AnimeForumResponse[]>> {
        return this.client.get<JikanResponse<AnimeForumResponse[]>>(`/anime/${id}/forum`);
    }

    /**
     * Retrieves video content (trailers, promotional videos) for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeVideoResponse>>} Promise that resolves to video data
     * @example
     * ```typescript
     * const videos = await jikan.anime.getAnimeVideos(1);
     * console.log(videos.data.promo);
     * ```
     */
    getAnimeVideos(id: number): Promise<JikanResponse<AnimeVideoResponse>> {
        return this.client.get<JikanResponse<AnimeVideoResponse>>(`/anime/${id}/videos`);
    }

    /**
     * Retrieves pictures/images for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimePictureResponse[]>>} Promise that resolves to picture data
     * @example
     * ```typescript
     * const pictures = await jikan.anime.getAnimePictures(1);
     * console.log(pictures.data[0].jpg.image_url);
     * ```
     */
    getAnimePictures(id: number): Promise<JikanResponse<AnimePictureResponse[]>> {
        return this.client.get<JikanResponse<AnimePictureResponse[]>>(`/anime/${id}/pictures`);
    }

    /**
     * Retrieves statistics for a specific anime (user counts, scores, etc.)
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeStatisticsResponse>>} Promise that resolves to statistics data
     * @example
     * ```typescript
     * const stats = await jikan.anime.getAnimeStatistics(1);
     * console.log(stats.data.watching);
     * ```
     */
    getAnimeStatistics(id: number): Promise<JikanResponse<AnimeStatisticsResponse>> {
        return this.client.get<JikanResponse<AnimeStatisticsResponse>>(`/anime/${id}/statistics`);
    }

    /**
     * Retrieves additional information for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<{ moreinfo: string }>>} Promise that resolves to additional info
     * @example
     * ```typescript
     * const moreInfo = await jikan.anime.getAnimeMoreInfo(1);
     * console.log(moreInfo.data.moreinfo);
     * ```
     */
    getAnimeMoreInfo(id: number): Promise<JikanResponse<{ moreinfo: string }>> {
        return this.client.get<JikanResponse<{ moreinfo: string }>>(`/anime/${id}/moreinfo`);
    }

    /**
     * Retrieves anime recommendations for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeRecommendationResponse[]>>} Promise that resolves to recommendation data
     * @example
     * ```typescript
     * const recommendations = await jikan.anime.getAnimeRecommendations(1);
     * console.log(recommendations.data[0].entry.title);
     * ```
     */
    getAnimeRecommendations(id: number): Promise<JikanResponse<AnimeRecommendationResponse[]>> {
        return this.client.get<JikanResponse<AnimeRecommendationResponse[]>>(`/anime/${id}/recommendations`);
    }

    /**
     * Retrieves recent user updates for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @param {number} [page] - Page number for pagination (optional)
     * @returns {Promise<JikanResponse<AnimeUserUpdateResponse[]>>} Promise that resolves to user update data
     * @example
     * ```typescript
     * const updates = await jikan.anime.getAnimeUserUpdates(1);
     * console.log(updates.data[0].user.username);
     * ```
     */
    getAnimeUserUpdates(id: number, page?: number): Promise<JikanResponse<AnimeUserUpdateResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<AnimeUserUpdateResponse[]>>(`/anime/${id}/userupdates${params}`);
    }

    /**
     * Retrieves user reviews for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @param {number} [page] - Page number for pagination (optional)
     * @returns {Promise<JikanResponse<AnimeReviewResponse[]>>} Promise that resolves to review data
     * @example
     * ```typescript
     * const reviews = await jikan.anime.getAnimeReviews(1);
     * console.log(reviews.data[0].review);
     * ```
     */
    getAnimeReviews(id: number, page?: number): Promise<JikanResponse<AnimeReviewResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<AnimeReviewResponse[]>>(`/anime/${id}/reviews${params}`);
    }

    /**
     * Retrieves related anime for a specific anime (sequels, prequels, etc.)
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeRelationResponse[]>>} Promise that resolves to relation data
     * @example
     * ```typescript
     * const relations = await jikan.anime.getAnimeRelations(1);
     * console.log(relations.data[0].relation);
     * ```
     */
    getAnimeRelations(id: number): Promise<JikanResponse<AnimeRelationResponse[]>> {
        return this.client.get<JikanResponse<AnimeRelationResponse[]>>(`/anime/${id}/relations`);
    }

    /**
     * Retrieves opening and ending themes for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeThemeResponse>>} Promise that resolves to theme data
     * @example
     * ```typescript
     * const themes = await jikan.anime.getAnimeThemes(1);
     * console.log(themes.data.openings);
     * ```
     */
    getAnimeThemes(id: number): Promise<JikanResponse<AnimeThemeResponse>> {
        return this.client.get<JikanResponse<AnimeThemeResponse>>(`/anime/${id}/themes`);
    }

    /**
     * Retrieves external links for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeExternalResponse[]>>} Promise that resolves to external link data
     * @example
     * ```typescript
     * const external = await jikan.anime.getAnimeExternal(1);
     * console.log(external.data[0].url);
     * ```
     */
    getAnimeExternal(id: number): Promise<JikanResponse<AnimeExternalResponse[]>> {
        return this.client.get<JikanResponse<AnimeExternalResponse[]>>(`/anime/${id}/external`);
    }

    /**
     * Retrieves streaming platform information for a specific anime
     * @param {number} id - MyAnimeList ID of the anime
     * @returns {Promise<JikanResponse<AnimeStreamingResponse[]>>} Promise that resolves to streaming data
     * @example
     * ```typescript
     * const streaming = await jikan.anime.getAnimeStreaming(1);
     * console.log(streaming.data[0].name);
     * ```
     */
    getAnimeStreaming(id: number): Promise<JikanResponse<AnimeStreamingResponse[]>> {
        return this.client.get<JikanResponse<AnimeStreamingResponse[]>>(`/anime/${id}/streaming`);
    }

    /**
     * Searches for anime based on various criteria
     * @param {Object} [params={}] - Search parameters
     * @param {string} [params.q] - Search query
     * @param {string} [params.type] - Anime type (TV, Movie, OVA, Special, ONA, Music)
     * @param {number} [params.score] - Score
     * @param {number} [params.min_score] - Minimum score
     * @param {number} [params.max_score] - Maximum score
     * @param {string} [params.status] - Airing status
     * @param {string} [params.rating] - Age rating
     * @param {boolean} [params.sfw] - Safe for work filter
     * @param {string} [params.genres] - Comma-separated genre IDs
     * @param {string} [params.genres_exclude] - Comma-separated genre IDs to exclude
     * @param {string} [params.order_by] - Field to order by
     * @param {string} [params.sort] - Sort direction (asc, desc)
     * @param {string} [params.letter] - Letter to filter by
     * @param {string} [params.producer] - Producer name
     * @param {string} [params.start_date] - Start date (YYYY-MM-DD)
     * @param {string} [params.end_date] - End date (YYYY-MM-DD)
     * @param {number} [params.page] - Page number
     * @param {number} [params.limit] - Results per page
     * @returns {Promise<JikanResponse<AnimeResponse[]>>} Promise that resolves to search results
     * @example
     * ```typescript
     * const results = await jikan.anime.searchAnime({ q: 'Naruto', type: 'TV' });
     * const topAnime = await jikan.anime.searchAnime({ order_by: 'score', sort: 'desc' });
     * ```
     */
    searchAnime(params: {
        q?: string;
        type?: string;
        score?: number;
        min_score?: number;
        max_score?: number;
        status?: string;
        rating?: string;
        sfw?: boolean;
        genres?: string;
        genres_exclude?: string;
        order_by?: string;
        sort?: string;
        letter?: string;
        producer?: string;
        start_date?: string;
        end_date?: string;
        page?: number;
        limit?: number;
    } = {}): Promise<JikanResponse<AnimeResponse[]>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        const queryString = queryParams.toString();
        return this.client.get<JikanResponse<AnimeResponse[]>>(`/anime${queryString ? `?${queryString}` : ''}`);
    }

}