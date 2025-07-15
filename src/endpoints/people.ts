/**
 * @fileoverview People endpoint class for accessing people-related data from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
import { 
    PersonResponse,
    PersonAnimeResponse,
    PersonMangaResponse,
    PersonVoicesResponse,
    PersonPicturesResponse,
    PersonExternalResponse,
    PeopleSearchParams
} from "../types/people";
import JikanResponse from "../types/common";

/**
 * People endpoint class providing methods to access people-related data
 * @class People
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const person = await jikan.people.getPersonById(1);
 * const animeWork = await jikan.people.getPersonAnime(1);
 * ```
 */
export class People {
    /**
     * Creates a new People endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves person information by MyAnimeList ID
     * @param {number} id - MyAnimeList ID of the person
     * @returns {Promise<JikanResponse<PersonResponse>>} Promise that resolves to person data
     * @example
     * ```typescript
     * const person = await jikan.people.getPersonById(1);
     * console.log(person.data.name);
     * console.log(person.data.birthday);
     * ```
     */
    async getPersonById(id: number): Promise<JikanResponse<PersonResponse>> {
        return this.client.get<PersonResponse>(`people/${id}`);
    }

    /**
     * Retrieves complete person information by MyAnimeList ID
     * @param {number} id - MyAnimeList ID of the person
     * @returns {Promise<JikanResponse<PersonResponse>>} Promise that resolves to complete person data
     * @example
     * ```typescript
     * const person = await jikan.people.getPersonFullById(id);
     * console.log(person.data.about);
     * console.log(person.data.alternate_names);
     * ```
     */
    async getPersonFullById(id: number): Promise<JikanResponse<PersonResponse>> {
        return this.client.get<PersonResponse>(`people/${id}/full`);
    }

    /**
     * Retrieves anime work for a person
     * @param {number} id - MyAnimeList ID of the person
     * @returns {Promise<JikanResponse<PersonAnimeResponse>>} Promise that resolves to person's anime work
     * @example
     * ```typescript
     * const animeWork = await jikan.people.getPersonAnime(1);
     * animeWork.data.forEach(work => {
     *   console.log(`${work.position} for ${work.anime.title}`);
     * });
     * ```
     */
    async getPersonAnime(id: number): Promise<JikanResponse<PersonAnimeResponse>> {
        return this.client.get<PersonAnimeResponse>(`people/${id}/anime`);
    }

    /**
     * Retrieves manga work for a person
     * @param {number} id - MyAnimeList ID of the person
     * @returns {Promise<JikanResponse<PersonMangaResponse>>} Promise that resolves to person's manga work
     * @example
     * ```typescript
     * const mangaWork = await jikan.people.getPersonManga(1);
     * mangaWork.data.forEach(work => {
     *   console.log(`${work.position} for ${work.manga.title}`);
     * });
     * ```
     */
    async getPersonManga(id: number): Promise<JikanResponse<PersonMangaResponse>> {
        return this.client.get<PersonMangaResponse>(`people/${id}/manga`);
    }

    /**
     * Retrieves voice acting roles for a person
     * @param {number} id - MyAnimeList ID of the person
     * @returns {Promise<JikanResponse<PersonVoicesResponse>>} Promise that resolves to person's voice acting roles
     * @example
     * ```typescript
     * const voices = await jikan.people.getPersonVoices(1);
     * voices.data.forEach(voice => {
     *   console.log(`${voice.character.name} in ${voice.anime.title} (${voice.role})`);
     * });
     * ```
     */
    async getPersonVoices(id: number): Promise<JikanResponse<PersonVoicesResponse>> {
        return this.client.get<PersonVoicesResponse>(`people/${id}/voices`);
    }

    /**
     * Retrieves pictures for a person
     * @param {number} id - MyAnimeList ID of the person
     * @returns {Promise<JikanResponse<PersonPicturesResponse>>} Promise that resolves to person's pictures
     * @example
     * ```typescript
     * const pictures = await jikan.people.getPersonPictures(1);
     * pictures.data.forEach(picture => {
     *   console.log(picture.large_image_url);
     * });
     * ```
     */
    async getPersonPictures(id: number): Promise<JikanResponse<PersonPicturesResponse>> {
        return this.client.get<PersonPicturesResponse>(`people/${id}/pictures`);
    }

    /**
     * Retrieves external links for a person
     * @param {number} id - MyAnimeList ID of the person
     * @returns {Promise<JikanResponse<PersonExternalResponse>>} Promise that resolves to person's external links
     * @example
     * ```typescript
     * const external = await jikan.people.getPersonExternal(1);
     * external.data.forEach(link => {
     *   console.log(`${link.name}: ${link.url}`);
     * });
     * ```
     */
    async getPersonExternal(id: number): Promise<JikanResponse<PersonExternalResponse>> {
        return this.client.get<PersonExternalResponse>(`people/${id}/external`);
    }

    /**
     * Searches for people
     * @param {PeopleSearchParams} [params={}] - Search parameters
     * @returns {Promise<JikanResponse<PersonResponse[]>>} Promise that resolves to search results
     * @example
     * ```typescript
     * const people = await jikan.people.searchPeople({ q: 'Hayao Miyazaki' });
     * people.data.forEach(person => {
     *   console.log(person.name);
     * });
     * 
     * // Advanced search
     * const results = await jikan.people.searchPeople({
     *   q: 'director',
     *   order_by: 'favorites',
     *   sort: 'desc',
     *   limit: 10
     * });
     * ```
     */
    async searchPeople(params: PeopleSearchParams = {}): Promise<JikanResponse<PersonResponse[]>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        
        const url = `people${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        return this.client.get<PersonResponse[]>(url);
    }
}