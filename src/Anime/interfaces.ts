export interface AnimeDataById {
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

export interface AnimeCharacter {
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
}

export interface AnimeStaff {
    person: Person;
    positions: Array<string>;
}

export interface AnimeEpisodes {
    pagination: Pagination;
    data: Array<AnimeEpisodesData>;
}

//Non Export Interface
interface AnimeEpisodesData {
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

//Common Interface
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

//Constants
export enum AnimeType {
    TV = "TV",
    OVA = "OVA",
    Movie = "Movie",
    Special = "Special",
    ONA = "ONA",
    Music = "Music",
}
