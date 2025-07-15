/**
 * @fileoverview Type definitions for people-related API responses
 */

/**
 * Basic person entry information
 * @interface PersonEntry
 */
export interface PersonEntry {
    /** MyAnimeList ID */
    mal_id: number;
    /** URL to the person's page on MyAnimeList */
    url: string;
    /** Person's name */
    name: string;
    /** Images for the person */
    images: {
        jpg: {
            image_url: string;
        };
    };
}

/**
 * Complete person information
 * @interface PersonResponse
 */
export interface PersonResponse {
    /** MyAnimeList ID */
    mal_id: number;
    /** URL to the person's page on MyAnimeList */
    url: string;
    /** Website URL if available */
    website_url?: string;
    /** Person's name */
    name: string;
    /** Given name */
    given_name?: string;
    /** Family name */
    family_name?: string;
    /** Alternative names */
    alternate_names: string[];
    /** Birthday date */
    birthday?: string;
    /** Number of favorites */
    favorites: number;
    /** Biography/about information */
    about?: string;
    /** Images for the person */
    images: {
        jpg: {
            image_url: string;
        };
    };
}

/**
 * Person's anime work entry
 * @interface PersonAnimeWork
 */
export interface PersonAnimeWork {
    /** Position/role in the anime */
    position: string;
    /** Anime information */
    anime: {
        mal_id: number;
        url: string;
        title: string;
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
    };
}

/**
 * Person's manga work entry
 * @interface PersonMangaWork
 */
export interface PersonMangaWork {
    /** Position/role in the manga */
    position: string;
    /** Manga information */
    manga: {
        mal_id: number;
        url: string;
        title: string;
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
    };
}

/**
 * Person's voice acting role
 * @interface PersonVoiceRole
 */
export interface PersonVoiceRole {
    /** Role type (Main, Supporting, etc.) */
    role: string;
    /** Anime information */
    anime: {
        mal_id: number;
        url: string;
        title: string;
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
    };
    /** Character information */
    character: {
        mal_id: number;
        url: string;
        name: string;
        images: {
            jpg: {
                image_url: string;
                small_image_url: string;
            };
            webp: {
                image_url: string;
                small_image_url: string;
            };
        };
    };
}

/**
 * Person's picture
 * @interface PersonPicture
 */
export interface PersonPicture {
    /** Large image URL */
    large_image_url: string;
    /** Small image URL */
    small_image_url: string;
}

/**
 * External link for person
 * @interface PersonExternalLink
 */
export interface PersonExternalLink {
    /** Link name */
    name: string;
    /** Link URL */
    url: string;
}

/**
 * Search parameters for people
 * @interface PeopleSearchParams
 */
export interface PeopleSearchParams {
    /** Search query */
    q?: string;
    /** Page number */
    page?: number;
    /** Results per page */
    limit?: number;
    /** Order by field */
    order_by?: string;
    /** Sort direction */
    sort?: string;
}

/**
 * Response type for person anime work
 * @type PersonAnimeResponse
 */
export type PersonAnimeResponse = PersonAnimeWork[];

/**
 * Response type for person manga work
 * @type PersonMangaResponse
 */
export type PersonMangaResponse = PersonMangaWork[];

/**
 * Response type for person voice acting
 * @type PersonVoicesResponse
 */
export type PersonVoicesResponse = PersonVoiceRole[];

/**
 * Response type for person pictures
 * @type PersonPicturesResponse
 */
export type PersonPicturesResponse = PersonPicture[];

/**
 * Response type for person external links
 * @type PersonExternalResponse
 */
export type PersonExternalResponse = PersonExternalLink[];