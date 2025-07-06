/**
 * @fileoverview Type definitions for character-related API responses
 */

/**
 * Main character response interface containing all character information
 * @interface CharacterResponse
 */
interface CharacterResponse {
    /** MyAnimeList ID of the character */
    mal_id: number;
    /** URL to the character's MyAnimeList page */
    url: string;
    /** Image URLs for the character in different formats and sizes */
    images: {
        /** JPEG format images */
        jpg: {
            /** Standard image URL */
            image_url?: string;
            /** Small-sized image URL */
            small_image_url?: string;
        };
        /** WebP format images */
        webp: {
            /** Standard image URL */
            image_url?: string;
            /** Small-sized image URL */
            small_image_url?: string;
        };
    };
    /** Character's name */
    name: string;
    /** Character's Japanese name */
    name_kanji?: string;
    /** Alternative names/nicknames */
    nicknames: string[];
    /** Number of users who favorited this character */
    favorites?: number;
    /** Character description/biography */
    about?: string;
}

/**
 * Character anime appearance response
 * @interface CharacterAnimeResponse
 */
interface CharacterAnimeResponse {
    /** Role of the character in the anime */
    role: string;
    /** Anime information */
    anime: {
        /** MyAnimeList ID of the anime */
        mal_id: number;
        /** URL to the anime's MyAnimeList page */
        url: string;
        /** Image URLs for the anime */
        images: {
            /** JPEG format images */
            jpg: {
                /** Standard image URL */
                image_url?: string;
                /** Small-sized image URL */
                small_image_url?: string;
                /** Large-sized image URL */
                large_image_url?: string;
            };
            /** WebP format images */
            webp: {
                /** Standard image URL */
                image_url?: string;
                /** Small-sized image URL */
                small_image_url?: string;
                /** Large-sized image URL */
                large_image_url?: string;
            };
        };
        /** Title of the anime */
        title: string;
    };
}

/**
 * Character manga appearance response
 * @interface CharacterMangaResponse
 */
interface CharacterMangaResponse {
    /** Role of the character in the manga */
    role: string;
    /** Manga information */
    manga: {
        /** MyAnimeList ID of the manga */
        mal_id: number;
        /** URL to the manga's MyAnimeList page */
        url: string;
        /** Image URLs for the manga */
        images: {
            /** JPEG format images */
            jpg: {
                /** Standard image URL */
                image_url?: string;
                /** Small-sized image URL */
                small_image_url?: string;
                /** Large-sized image URL */
                large_image_url?: string;
            };
            /** WebP format images */
            webp: {
                /** Standard image URL */
                image_url?: string;
                /** Small-sized image URL */
                small_image_url?: string;
                /** Large-sized image URL */
                large_image_url?: string;
            };
        };
        /** Title of the manga */
        title: string;
    };
}

/**
 * Character voice actor response
 * @interface CharacterVoiceActorResponse
 */
interface CharacterVoiceActorResponse {
    /** Language of the voice acting */
    language: string;
    /** Voice actor/person information */
    person: {
        /** MyAnimeList ID of the person */
        mal_id: number;
        /** URL to the person's MyAnimeList page */
        url: string;
        /** Image URLs for the person */
        images: {
            /** JPEG format images */
            jpg: {
                /** Standard image URL */
                image_url?: string;
            };
        };
        /** Name of the voice actor */
        name: string;
    };
}

/**
 * Character picture response
 * @interface CharacterPictureResponse
 */
interface CharacterPictureResponse {
    /** Large-sized image URL */
    large_image_url: string;
    /** Small-sized image URL */
    small_image_url: string;
}

export type { 
    CharacterResponse,
    CharacterAnimeResponse,
    CharacterMangaResponse,
    CharacterVoiceActorResponse,
    CharacterPictureResponse
};