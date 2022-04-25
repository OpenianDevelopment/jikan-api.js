export interface AnimeDataById {
    data: AnimeData;
}
export interface AnimeCharacter {
    data: {
        character: {
            mal_id: number;
            url: string;
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
            name: string;
        };
        role: string;
        voice_actors: {
            person: Person;
            language: string;
        }[];
    };
}
export interface AnimeStaff {
    data: {
        person: Person;
        positions: Array<string>;
    }[];
}
export interface AnimeEpisodes {
    pagination: Pagination;
    data: Array<AnimeEpisodesData>;
}
export interface AnimeEpisodeById {
    data: {
        mal_id: number;
        url: string;
        title: string;
        title_japanese: string;
        title_romanji: string;
        duration: number;
        aired: string;
        filler: boolean;
        recap: boolean;
        synopsis: string;
    };
}
export interface AnimeNews {
    pagination: Pagination;
    data: Array<AnimeNewsData>;
}
export interface AnimeVideos {
    data: {
        promos: {
            title: string;
            trailer: {
                youtube_id: string;
                url: string;
                embed_url: string;
                images: {
                    default_image_url: string;
                    small_image_url: string;
                    medium_image_url: string;
                    large_image_url: string;
                    maximum_image_url: string;
                };
            };
        }[];
        episodes: {
            mal_id: number;
            url: string;
            title: string;
            episode: string;
            images: {
                jpg: {
                    image_url: string;
                };
            };
        }[];
    };
}
export interface AnimeStatistics {
    data: {
        watching: number;
        completed: number;
        on_hold: number;
        dropped: number;
        plan_to_watch: number;
        total: number;
        scores: {
            score: number;
            votes: number;
            percentage: number;
        }[];
    };
}
export interface AnimeMoreInfo {
    data: {
        moreinfo: string;
    };
}
export interface AnimeRecommendations {
    data: {
        entry: {
            mal_id: number;
            url: string;
            images: {
                jpg: {
                    image_url: string;
                    small_image_url: string;
                    large_Image_url: string;
                };
                webp: {
                    image_url: string;
                    small_image_url: string;
                    large_Image_url: string;
                };
            };
            title: string;
        };
        url: string;
        votes: number;
    }[];
}
export interface AnimePictures {
    data: {
        image_url: string;
        large_image_url: string;
    }[];
}
export interface AnimeForum {
    data: {
        mal_id: number;
        url: string;
        title: string;
        date: string;
        author_username: string;
        author_url: string;
        comments: number;
        last_comment: {
            url: string;
            author_username: string;
            author_url: string;
            date: string;
        };
    }[];
}
export interface AnimeUserUpdates {
    pagination: Pagination;
    data: {
        user: {
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
        };
        score: number;
        status: string;
        episodes_seen: number;
        episodes_total: number;
        date: string;
    }[];
}
export interface AnimeReviews {
    pagination: Pagination;
    data: {
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
        user: {
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
        };
    }[];
}
export interface AnimeRelations {
    data: {
        relation: string;
        items: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[];
    }[];
}
export interface AnimeThemes {
    data: {
        openings: Array<string>;
        endings: Array<string>;
    };
}
export interface AnimeSearch {
    pagination: Pagination;
    data: Array<AnimeData>;
}
export interface AnimeEpisodesData {
    mal_id: number;
    url: string;
    title: string;
    title_japanese: string;
    title_romanji: string;
    duration: number;
    aired: string;
    filler: boolean;
    recap: boolean;
    forum_url: string;
}
export interface AnimeSearchQuery {
    page: number;
    limit: number;
    q: string;
    type: "tv" | "movie" | "ova" | "special" | "ona" | "music";
    score: number;
    status: "airing" | "complete" | "upcoming";
    rating: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
    sfw: boolean;
    genres: string;
    order_by: "mal_id" | "title" | "type" | "rating" | "start_date" | "end_date" | "episodes" | "score" | "scored_by" | "rank" | "popularity" | "members" | "favorites";
    sort: "desc" | "asc";
    letter: string;
    producer: string;
}
export interface AnimeNewsData {
    mal_id: number;
    url: string;
    title: string;
    date: string;
    author_username: string;
    author_url: string;
    forum_url: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
    comments: number;
    excerpt: string;
}
export interface AnimeData {
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
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
    };
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string;
    type: AnimeType;
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
            string: string;
        };
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
    year: string;
    broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
    };
    producers: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
    licensors: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
    studios: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
    genres: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
}
interface Person {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
    name: string;
}
interface Pagination {
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
    };
}
export declare enum AnimeType {
    TV = "TV",
    OVA = "OVA",
    Movie = "Movie",
    Special = "Special",
    ONA = "ONA",
    Music = "Music"
}
export {};
