/**
 * @fileoverview Type definitions for schedule-related API responses
 */

/**
 * Scheduled anime entry
 * @interface ScheduleEntry
 */
export interface ScheduleEntry {
    /** MyAnimeList ID */
    mal_id: number;
    /** URL to the anime */
    url: string;
    /** Anime title */
    title: string;
    /** Anime titles in different languages */
    titles: Array<{
        type: string;
        title: string;
    }>;
    /** Anime images */
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
    /** Anime type */
    type: string;
    /** Anime source material */
    source: string;
    /** Number of episodes */
    episodes?: number;
    /** Airing status */
    status: string;
    /** Whether currently airing */
    airing: boolean;
    /** Airing period */
    aired: {
        from?: string;
        to?: string;
        prop: {
            from: {
                day?: number;
                month?: number;
                year?: number;
            };
            to: {
                day?: number;
                month?: number;
                year?: number;
            };
        };
        string: string;
    };
    /** Duration per episode */
    duration: string;
    /** Age rating */
    rating: string;
    /** Anime score */
    score?: number;
    /** Number of users who scored */
    scored_by?: number;
    /** Anime rank */
    rank?: number;
    /** Popularity rank */
    popularity: number;
    /** Number of members */
    members: number;
    /** Number of favorites */
    favorites: number;
    /** Synopsis */
    synopsis?: string;
    /** Background information */
    background?: string;
    /** Season */
    season?: string;
    /** Year */
    year?: number;
    /** Broadcast information */
    broadcast: {
        day?: string;
        time?: string;
        timezone?: string;
        string?: string;
    };
    /** Producers */
    producers: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    /** Licensors */
    licensors: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    /** Studios */
    studios: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    /** Genres */
    genres: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    /** Explicit genres */
    explicit_genres: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    /** Themes */
    themes: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    /** Demographics */
    demographics: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
}

/**
 * Schedule filter parameters
 * @interface ScheduleParams
 */
export interface ScheduleParams {
    /** Filter by specific day */
    filter?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' | 'other' | 'unknown';
    /** Safe for work filter */
    sfw?: boolean;
    /** Filter unapproved entries */
    unapproved?: boolean;
    /** Page number */
    page?: number;
    /** Results per page */
    limit?: number;
}

/**
 * Response type for schedules
 * @type ScheduleResponse
 */
export type ScheduleResponse = ScheduleEntry[];