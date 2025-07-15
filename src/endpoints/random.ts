/**
 * @fileoverview Random endpoint class for accessing random content from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
import { 
    RandomAnimeResponse,
    RandomMangaResponse,
    RandomCharacterResponse,
    RandomPersonResponse,
    RandomUserResponse
} from "../types/random";
import JikanResponse from "../types/common";

/**
 * Random endpoint class providing methods to access random content
 * @class Random
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const randomAnime = await jikan.random.getRandomAnime();
 * const randomManga = await jikan.random.getRandomManga();
 * ```
 */
export class Random {
    /**
     * Creates a new Random endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves a random anime
     * @returns {Promise<JikanResponse<RandomAnimeResponse>>} Promise that resolves to random anime data
     * @example
     * ```typescript
     * const randomAnime = await jikan.random.getRandomAnime();
     * console.log(`Random anime: ${randomAnime.data.titles[0].title}`);
     * console.log(`Score: ${randomAnime.data.score}`);
     * console.log(`Episodes: ${randomAnime.data.episodes}`);
     * ```
     */
    async getRandomAnime(): Promise<JikanResponse<RandomAnimeResponse>> {
        return this.client.get<RandomAnimeResponse>('random/anime');
    }

    /**
     * Retrieves a random manga
     * @returns {Promise<JikanResponse<RandomMangaResponse>>} Promise that resolves to random manga data
     * @example
     * ```typescript
     * const randomManga = await jikan.random.getRandomManga();
     * console.log(`Random manga: ${randomManga.data.titles[0].title}`);
     * console.log(`Score: ${randomManga.data.score}`);
     * console.log(`Chapters: ${randomManga.data.chapters}`);
     * ```
     */
    async getRandomManga(): Promise<JikanResponse<RandomMangaResponse>> {
        return this.client.get<RandomMangaResponse>('random/manga');
    }

    /**
     * Retrieves a random character
     * @returns {Promise<JikanResponse<RandomCharacterResponse>>} Promise that resolves to random character data
     * @example
     * ```typescript
     * const randomCharacter = await jikan.random.getRandomCharacter();
     * console.log(`Random character: ${randomCharacter.data.name}`);
     * console.log(`Favorites: ${randomCharacter.data.favorites}`);
     * ```
     */
    async getRandomCharacter(): Promise<JikanResponse<RandomCharacterResponse>> {
        return this.client.get<RandomCharacterResponse>('random/characters');
    }

    /**
     * Retrieves a random person
     * @returns {Promise<JikanResponse<RandomPersonResponse>>} Promise that resolves to random person data
     * @example
     * ```typescript
     * const randomPerson = await jikan.random.getRandomPerson();
     * console.log(`Random person: ${randomPerson.data.name}`);
     * console.log(`Favorites: ${randomPerson.data.favorites}`);
     * ```
     */
    async getRandomPerson(): Promise<JikanResponse<RandomPersonResponse>> {
        return this.client.get<RandomPersonResponse>('random/people');
    }

    /**
     * Retrieves a random user
     * @returns {Promise<JikanResponse<RandomUserResponse>>} Promise that resolves to random user data
     * @example
     * ```typescript
     * const randomUser = await jikan.random.getRandomUser();
     * console.log(`Random user: ${randomUser.data.username}`);
     * console.log(`Joined: ${randomUser.data.joined}`);
     * ```
     */
    async getRandomUser(): Promise<JikanResponse<RandomUserResponse>> {
        return this.client.get<RandomUserResponse>('random/users');
    }
}