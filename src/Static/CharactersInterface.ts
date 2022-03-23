/**
 * @typedef {Object} CharacterById
 * @property {CharacterData} data The data of the character
 */
export interface CharacterById {
    data: CharacterData;
}


export interface CharacterAnime {
    data: {
        role: string;
        anime: {
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
    }[];
}

export interface CharacterManga {
    data: {
        role: string;
        manga: {
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
    }[];
}

export interface CharacterVoiceActors {
    data: {
        language: string;
        person: {
            mal_id: number;
            url: string;
            images: {
                jpg: {
                    image_url: string;
                };
            };
            name: string;
        };
    }[];
}

export interface CharacterPictures {
    data: {
        image_url: string;
        large_image_url: string;
    }[];
}

export interface CharacterSearch {
    data: CharacterData;
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
    };
}

//non-result interfaces
export interface CharacterData {
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
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
    animeography: {
        image_url: string;
        role: string;
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
    mangaography: {
        image_url: string;
        role: string;
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
    voice_actors: {
        image_url: string;
        language: string;
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
}

export interface CharacterSearchQuery {
    page: number;
    limit: number;
    q: string;
    order_by: "mal_id" | "name" | "favorites";
    sort: "desc" | "asc";
    letter: string
}
