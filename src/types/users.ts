/**
 * @fileoverview TypeScript type definitions for user-related API responses
 */

export interface UserResponse {
    mal_id: number;
    username: string;
    url: string;
    images: {
        jpg: {
            image_url: string;
        };
        webp: {
            image_url: string;
        };
    };
    last_online: string;
    gender?: string;
    birthday?: string;
    location?: string;
    joined: string;
}

export interface UserStatisticsResponse {
    anime: {
        days_watched: number;
        mean_score: number;
        watching: number;
        completed: number;
        on_hold: number;
        dropped: number;
        plan_to_watch: number;
        total_entries: number;
        rewatched: number;
        episodes_watched: number;
    };
    manga: {
        days_read: number;
        mean_score: number;
        reading: number;
        completed: number;
        on_hold: number;
        dropped: number;
        plan_to_read: number;
        total_entries: number;
        reread: number;
        chapters_read: number;
        volumes_read: number;
    };
}

export interface UserFavoritesResponse {
    anime: Array<{
        mal_id: number;
        url: string;
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
        title: string;
        type: string;
        start_year: number;
    }>;
    manga: Array<{
        mal_id: number;
        url: string;
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
        title: string;
        type: string;
        start_year: number;
    }>;
    characters: Array<{
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url: string;
            };
            webp: {
                image_url: string;
            };
        };
        name: string;
    }>;
    people: Array<{
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url: string;
            };
        };
        name: string;
    }>;
}

export interface UserAnimeListResponse {
    mal_id: number;
    title: string;
    url: string;
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
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: {
        from: string;
        to: string;
        prop: {
            from: {
                day: number;
                month: number;
                year: number;
            };
            to: {
                day: number;
                month: number;
                year: number;
            };
        };
        string: string;
    };
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string;
    year: number;
    broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
    };
    producers: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    licensors: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    studios: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    genres: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    explicit_genres: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    themes: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    demographics: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    list_status: {
        status: string;
        score: number;
        tags: string;
        is_rewatching: boolean;
        num_watched_episodes: number;
        start_date: string;
        finish_date: string;
    };
}

export interface UserMangaListResponse {
    mal_id: number;
    title: string;
    url: string;
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
    type: string;
    chapters: number;
    volumes: number;
    status: string;
    publishing: boolean;
    published: {
        from: string;
        to: string;
        prop: {
            from: {
                day: number;
                month: number;
                year: number;
            };
            to: {
                day: number;
                month: number;
                year: number;
            };
        };
        string: string;
    };
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    authors: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    serializations: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    genres: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    explicit_genres: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    themes: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    demographics: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
    list_status: {
        status: string;
        score: number;
        tags: string;
        is_rereading: boolean;
        num_read_chapters: number;
        num_read_volumes: number;
        start_date: string;
        finish_date: string;
    };
}

export interface UserFriendsResponse {
    mal_id: number;
    username: string;
    url: string;
    images: {
        jpg: {
            image_url: string;
        };
        webp: {
            image_url: string;
        };
    };
    last_online: string;
    friends_since: string;
}

export interface UserReviewResponse {
    mal_id: number;
    url: string;
    type: string;
    votes: number;
    date: string;
    review: string;
    episodes_watched: number;
    scores: {
        overall: number;
        story: number;
        animation: number;
        sound: number;
        character: number;
        enjoyment: number;
    };
    entry: {
        mal_id: number;
        url: string;
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
        title: string;
    };
}

export interface UserRecommendationResponse {
    mal_id: string;
    entry: Array<{
        mal_id: number;
        url: string;
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
        title: string;
    }>;
    content: string;
    date: string;
    user: {
        url: string;
        username: string;
    };
}

export interface UserClubResponse {
    mal_id: number;
    name: string;
    url: string;
}

export interface UserUpdateResponse {
    entry: {
        mal_id: number;
        url: string;
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
        title: string;
    };
    score: number;
    status: string;
    episodes_seen: number;
    episodes_total: number;
    date: string;
}