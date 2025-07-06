/**
 * @fileoverview Type definitions for manga-related API responses
 */

/**
 * Main manga response interface containing all manga information
 * @interface MangaResponse
 */
interface MangaResponse {
    /** MyAnimeList ID of the manga */
    mal_id: number;
    /** URL to the manga's MyAnimeList page */
    url: string;
    /** Image URLs for the manga in different formats and sizes */
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
    /** Whether the manga entry is approved by MyAnimeList */
    approved: boolean;
    /** Array of titles in different languages */
    titles: {
        /** Type of the title (e.g., "Default", "English", "Japanese") */
        type: string;
        /** The actual title text */
        title: string;
    }[];
    /** Type of manga */
    type?: "Manga" | "Light Novel" | "One-shot" | "Doujinshi" | "Manhwa" | "Manhua" | "Novel";
    /** Number of chapters */
    chapters?: number;
    /** Number of volumes */
    volumes?: number;
    /** Current publishing status */
    status?: "Finished" | "Publishing" | "On Hiatus" | "Discontinued" | "Not yet published";
    /** Whether the manga is currently publishing */
    publishing: boolean;
    published: {
        from?: string;
        to?: string;
        prop: {
            from: { day?: number; month?: number; year?: number };
            to: { day?: number; month?: number; year?: number };
            string?: string;
        };
    };
    /** Content rating/score */
    score?: number;
    /** Number of users who scored this manga */
    scored_by?: number;
    /** Rank based on score */
    rank?: number;
    /** Popularity rank */
    popularity?: number;
    /** Number of members who have this manga in their list */
    members?: number;
    /** Number of users who favorited this manga */
    favorites?: number;
    /** Synopsis/description of the manga */
    synopsis?: string;
    /** Background information */
    background?: string;
    /** Array of authors */
    authors: { mal_id: number; type: string; name: string; url: string }[];
    /** Array of serializations (magazines) */
    serializations: { mal_id: number; type: string; name: string; url: string }[];
    /** Array of genres */
    genres: { mal_id: number; type: string; name: string; url: string }[];
    /** Array of explicit genres */
    explicit_genres: { mal_id: number; type: string; name: string; url: string }[];
    /** Array of themes */
    themes: { mal_id: number; type: string; name: string; url: string }[];
    /** Array of demographics */
    demographics: { mal_id: number; type: string; name: string; url: string }[];
    /** Related manga/anime */
    relations: {
        relation: string;
        entry: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[];
    }[];
    /** External links */
    external: {
        name: string;
        url: string;
    }[];
}

interface MangaCharacterResponse {
    character: {
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url?: string;
                small_image_url?: string;
            };
            webp: {
                image_url?: string;
                small_image_url?: string;
            };
        };
        name: string;
    };
    role: string;
}

interface MangaNewsResponse {
    mal_id: number;
    url: string;
    title: string;
    date: string;
    author_username: string;
    author_url: string;
    forum_url: string;
    images: {
        jpg: {
            image_url?: string;
        };
    };
    comments: number;
    excerpt: string;
}

interface MangaForumResponse {
    mal_id: number;
    url: string;
    title: string;
    date_posted: string;
    author_username: string;
    author_url: string;
    comments: number;
    last_comment: {
        url: string;
        author_username: string;
        author_url: string;
        date_posted: string;
    };
}

interface MangaPictureResponse {
    large_image_url: string;
    small_image_url: string;
}

interface MangaStatisticsResponse {
    reading: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_read: number;
    total: number;
    scores: {
        [key: string]: {
            votes: number;
            percentage: number;
        };
    };
}

interface MangaRecommendationResponse {
    entry: {
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url?: string;
                small_image_url?: string;
                large_image_url?: string;
            };
            webp: {
                image_url?: string;
                small_image_url?: string;
                large_image_url?: string;
            };
        };
        title: string;
    };
    url: string;
    votes: number;
}

interface MangaUserUpdateResponse {
    user: {
        username: string;
        url: string;
        images: {
            jpg: {
                image_url?: string;
            };
            webp: {
                image_url?: string;
            };
        };
    };
    score?: number;
    status: string;
    chapters_read?: number;
    chapters_total?: number;
    volumes_read?: number;
    volumes_total?: number;
    date: string;
}

interface MangaReviewResponse {
    mal_id: number;
    url: string;
    type: string;
    votes: number;
    date: string;
    review: string;
    chapters_read?: number;
    scores: {
        overall: number;
        story: number;
        art: number;
        character: number;
        enjoyment: number;
    };
    user: {
        username: string;
        url: string;
        images: {
            jpg: {
                image_url?: string;
            };
            webp: {
                image_url?: string;
            };
        };
    };
}

interface MangaRelationResponse {
    relation: string;
    entry: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
}

interface MangaExternalResponse {
    name: string;
    url: string;
}

export type { 
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
};