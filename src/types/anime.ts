interface AnimeResponse {
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
    trailer: {
        youtube_id?: string;
        url?: string;
        embed_url?: string;
    };
    approved: boolean;
    titles: {
        type: string;
        title: string;
    }[];
    type?: "TV" | "OVA" | "Movie" | "Special" | "ONA" | "Music";
    source?: string;
    episodes?: number;
    status?: "Finished Airing" | "Currently Airing" | "Not yet aired";
    airing: boolean;
    aired: {
        from?: string;
        to?: string;
        prop: {
            from: { day?: number; month?: number; year?: number };
            to: { day?: number; month?: number; year?: number };
            string?: string;
        };
    };
    duration?: string;
    rating?: "G - All Ages" | "PG - Children" | "PG-13 - Teens 13 or older" | "R - 17+ (violence & profanity)" | "R+ - Mild Nudity" | "Rx - Hentai";
    score?: number;
    scored_by?: number;
    rank?: number;
    popularity?: number;
    members?: number;
    favorites?: number;
    synopsis?: string;
    background?: string;
    season?: "summer" | "winter" | "spring" | "fall";
    year?: number;
    broadcast: {
        day?: string;
        time?: string;
        timezone?: string;
        string?: string;
    };
    producers: { mal_id: number; type: string; name: string; url: string }[];
    licensors: { mal_id: number; type: string; name: string; url: string }[];
    studios: { mal_id: number; type: string; name: string; url: string }[];
    genres: { mal_id: number; type: string; name: string; url: string }[];
    explicit_genres: { mal_id: number; type: string; name: string; url: string }[];
    themes: { mal_id: number; type: string; name: string; url: string }[];
    demographics: { mal_id: number; type: string; name: string; url: string }[];
    relations: {
        relation: string;
        entry: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }
    }[];
    theme: {
        openings: string[];
        endings: string[];
    }
    external: {
        name: string;
        url: string;
    }[];
    streaming: {
        name: string;
        url: string;
    }[];
}

interface AnimeCharacterResponse {
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
    voice_actors: {
        person: {
            mal_id: number;
            url: string;
            images: {
                jpg: {
                    image_url?: string;
                };
            };
            name: string;
        };
        language: string;
    }[];
}

interface AnimeStaffResponse {
    person: {
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url?: string;
            };
        };
        name: string;
    };
    positions: string[];
}

interface AnimeEpisodeResponse {
    mal_id: number;
    url?: string;
    title: string;
    title_japanese?: string;
    title_romanji?: string;
    aired?: string;
    score?: number;
    filler: boolean;
    recap: boolean;
    forum_url?: string;
}

interface AnimeNewsResponse {
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

interface AnimeForumResponse {
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

interface AnimeVideoResponse {
    promo: {
        title: string;
        trailer: {
            youtube_id: string;
            url: string;
            embed_url: string;
        };
    }[];
    episodes: {
        mal_id: number;
        url: string;
        title: string;
        episode: string;
        images: {
            jpg: {
                image_url?: string;
            };
        };
    }[];
    music_videos: {
        title: string;
        video: {
            youtube_id: string;
            url: string;
            embed_url: string;
        };
        meta: {
            title?: string;
            author?: string;
        };
    }[];
}

interface AnimePictureResponse {
    large_image_url: string;
    small_image_url: string;
}

interface AnimeStatisticsResponse {
    watching: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_watch: number;
    total: number;
    scores: {
        [key: string]: {
            votes: number;
            percentage: number;
        };
    };
}

interface AnimeRecommendationResponse {
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

interface AnimeUserUpdateResponse {
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
    episodes_seen?: number;
    episodes_total?: number;
    date: string;
}

interface AnimeReviewResponse {
    mal_id: number;
    url: string;
    type: string;
    votes: number;
    date: string;
    review: string;
    episodes_watched?: number;
    scores: {
        overall: number;
        story: number;
        animation: number;
        sound: number;
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

interface AnimeRelationResponse {
    relation: string;
    entry: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
}

interface AnimeThemeResponse {
    openings: string[];
    endings: string[];
}

interface AnimeExternalResponse {
    name: string;
    url: string;
}

interface AnimeStreamingResponse {
    name: string;
    url: string;
}

export type { 
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
};