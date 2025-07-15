/**
 * @fileoverview Type definitions for recommendation-related API responses
 */

/**
 * Recommendation entry containing basic information about recommended content
 * @interface RecommendationEntry
 */
export interface RecommendationEntry {
    /** MyAnimeList ID */
    mal_id: number;
    /** URL to the content on MyAnimeList */
    url: string;
    /** Title of the recommended content */
    title: string;
    /** Images for the recommended content */
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
        webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
}

/**
 * User information for recommendation
 * @interface RecommendationUser
 */
export interface RecommendationUser {
    /** Username of the user who made the recommendation */
    username: string;
    /** URL to the user's profile */
    url: string;
}

/**
 * Single recommendation data structure
 * @interface RecommendationData
 */
export interface RecommendationData {
    /** MyAnimeList ID of the recommendation */
    mal_id: string;
    /** Recommended content entries (always contains 2 items for comparison) */
    entry: RecommendationEntry[];
    /** Recommendation text content */
    content: string;
    /** Date when the recommendation was created */
    date: string;
    /** User who made the recommendation */
    user: RecommendationUser;
}

/**
 * Response type for anime recommendations
 * @type AnimeRecommendationResponse
 */
export type AnimeRecommendationResponse = RecommendationData[];

/**
 * Response type for manga recommendations  
 * @type MangaRecommendationResponse
 */
export type MangaRecommendationResponse = RecommendationData[];