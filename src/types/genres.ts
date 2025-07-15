/**
 * @fileoverview Type definitions for genre-related API responses
 */

/**
 * Genre information
 * @interface GenreResponse
 */
export interface GenreResponse {
    /** MyAnimeList ID */
    mal_id: number;
    /** Genre name */
    name: string;
    /** URL to the genre page */
    url: string;
    /** Number of entries with this genre */
    count: number;
}

/**
 * Response type for anime genres
 * @type AnimeGenresResponse
 */
export type AnimeGenresResponse = GenreResponse[];

/**
 * Response type for manga genres
 * @type MangaGenresResponse
 */
export type MangaGenresResponse = GenreResponse[];