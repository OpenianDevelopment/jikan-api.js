/**
 * @fileoverview Main Jikan API client class
 */

import JikanHttpClient from "./client/http-client";
import { Anime } from "./endpoints/anime";
import { Manga } from "./endpoints/manga";
import { Characters } from "./endpoints/characters";
import { Users } from "./endpoints/users";
import { Recommendations } from "./endpoints/recommendations";
import { People } from "./endpoints/people";
import { Genres } from "./endpoints/genres";
import { Schedules } from "./endpoints/schedules";
import { Random } from "./endpoints/random";

/**
 * Main Jikan API client class that provides access to various endpoints
 * @class Jikan
 * @example
 * ```typescript
 * import Jikan from 'jikan-api.js';
 * 
 * const jikan = new Jikan();
 * const anime = await jikan.anime.getAnimeByFullId(1);
 * const manga = await jikan.manga.getMangaByFullId(1);
 * const character = await jikan.characters.getCharacterByFullId(1);
 * const user = await jikan.users.getUserByUsername('username');
 * const recommendations = await jikan.recommendations.getRecentAnimeRecommendations();
 * const person = await jikan.people.getPersonById(1);
 * const genres = await jikan.genres.getAnimeGenres();
 * const schedule = await jikan.schedules.getSchedules();
 * const randomAnime = await jikan.random.getRandomAnime();
 * ```
 */
class Jikan {
    /**
     * Base URL for the Jikan API
     * @private
     */
    private _baseUrl: string = "https://api.jikan.moe/v4";
    
    /**
     * HTTP client instance for making API requests
     * @public
     */
    client: JikanHttpClient;
    
    /**
     * Anime endpoint accessor
     * @public
     */
    anime: Anime;
    
    /**
     * Manga endpoint accessor
     * @public
     */
    manga: Manga;
    
    /**
     * Characters endpoint accessor
     * @public
     */
    characters: Characters;
    
    /**
     * Users endpoint accessor
     * @public
     */
    users: Users;
    
    /**
     * Recommendations endpoint accessor
     * @public
     */
    recommendations: Recommendations;
    
    /**
     * People endpoint accessor
     * @public
     */
    people: People;
    
    /**
     * Genres endpoint accessor
     * @public
     */
    genres: Genres;
    
    /**
     * Schedules endpoint accessor
     * @public
     */
    schedules: Schedules;
    
    /**
     * Random endpoint accessor
     * @public
     */
    random: Random;
    
    /**
     * Creates a new Jikan API client instance
     * @param {string} [baseUrl] - Custom base URL for the API (optional)
     * @example
     * ```typescript
     * // Using default Jikan API URL
     * const jikan = new Jikan();
     * 
     * // Using custom base URL
     * const jikan = new Jikan('https://custom-api.example.com/v4');
     * ```
     */
    constructor(baseUrl?: string) {
        if (baseUrl) {
            this._baseUrl = baseUrl;
        }
        this.client = new JikanHttpClient(this._baseUrl);
        this.anime = new Anime(this.client);
        this.manga = new Manga(this.client);
        this.characters = new Characters(this.client);
        this.users = new Users(this.client);
        this.recommendations = new Recommendations(this.client);
        this.people = new People(this.client);
        this.genres = new Genres(this.client);
        this.schedules = new Schedules(this.client);
        this.random = new Random(this.client);
    }
}

export default Jikan;