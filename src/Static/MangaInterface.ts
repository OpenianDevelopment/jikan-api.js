/* This is a TypeScript interface. It is used to describe the shape of the data that will be returned by the API. */
export interface MangaDataById {
    data: MangaData;
}

/* A TypeScript interface. It is used to describe the shape of the data that will be returned by the API. */
export interface MangaCharacters {
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
    }[];
}


export interface MangaNews {
    pagination: Pagination;
    data: {
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
    }[];
}

export interface MangaTopics {
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

export interface MangaPictures {
    data: {
        image_url: string;
        large_image_url: string;
    }[];
}

export interface MangaStatistics {
    data: {
        reading: number;
        completed: number;
        on_hold: number;
        dropped: number;
        plan_to_read: number;
        total: number;
        scores: [
            {
                score: number;
                votes: number;
                percentage: number;
            }
        ];
    };
}

export interface MangaMoreInfo {
    data: {
        moreinfo: string;
    };
}

export interface MangaRecommendations {
    data: {
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
        }[];
        url: string;
        votes: number;
    }[];
}

export interface MangaUserUpdates {
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
        volumes_read: number;
        volumes_total: number;
        chapters_read: number;
        chapters_total: number;
        date: string;
    }[];
    pagination: Pagination;
}

export interface MangaReviews {
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
        mal_id: number;
        url: string;
        title: string;
        votes: number;
        date: string;
        chapters_read: number;
        review: string;
        scores: {
            overall: number;
            story: number;
            art: number;
            character: number;
            enjoyment: number;
        };
    }[];
    pagination: Pagination;
}

export interface MangaRelations {
    data: {
        relation: string;
        entry: Entry[];
    }[];
}

export interface MangaExternal {
    data: {
        name: string;
        url: string;
    }[];
}

export interface MangaSearch {
    data: MangaData;
    pagination: Pagination;
}

//non-result interfaces
export interface MangaData {
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
    title_english: string;
    title_japanese: string;
    title_synonyms: string;
    type: string;
    chapters: number;
    volumnes: number;
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
            string: string;
        };
    };
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    authors: Entry[];
    serializations: Entry[];
    genres: Entry[];
    explicit_genres: Entry[];
    themes: Entry[];
    demographics: Entry[];
}

export interface MangaSearchQuery {
    page?: number;
    limit?: number;
    q?: string;
    type?:
        | "manga"
        | "novel"
        | "lightnovel"
        | "oneshot"
        | "doujin"
        | "manhwa"
        | "manhua";
    score?: number;
    min_score?: number;
    max_score?: number;
    status?: "publishing" | "complete" | "hiatus" | "discontinued" | "upcoming";
    sfw?: boolean;
    genres?: string;
    genres_exclude?: string;
    order_by?:
        | "mal_id"
        | "title"
        | "start_date"
        | "end_date"
        | "chapters"
        | "volumes"
        | "score"
        | "scored_by"
        | "rank"
        | "popularity"
        | "members"
        | "favorites";
    sort?: "desc" | "asc";
    letter?: string;
    magazine?: string;
}

//Common used interfaces
export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
}

export interface Entry {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export enum MangaTopicFilter {
    All = "all",
    EPISODE = "episode",
    OTHER = "other",
}
