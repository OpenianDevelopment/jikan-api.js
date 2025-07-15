/**
 * @fileoverview Characters endpoint class for accessing character-related data from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
import { 
    CharacterResponse,
    CharacterAnimeResponse,
    CharacterMangaResponse,
    CharacterVoiceActorResponse,
    CharacterPictureResponse,
    CharacterSearchParams
} from "../types/characters";
import JikanResponse from "../types/common";

/**
 * Characters endpoint class providing methods to access character-related data
 * @class Characters
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const character = await jikan.characters.getCharacterByFullId(1);
 * const anime = await jikan.characters.getCharacterAnime(1);
 * ```
 */
export class Characters {
    /**
     * Creates a new Characters endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves complete character information by MyAnimeList ID
     * @param {number} id - MyAnimeList ID of the character
     * @returns {Promise<JikanResponse<CharacterResponse>>} Promise that resolves to character data
     * @example
     * ```typescript
     * const character = await jikan.characters.getCharacterByFullId(1);
     * console.log(character.data.name);
     * console.log(character.data.about);
     * ```
     */
    getCharacterByFullId(id: number): Promise<JikanResponse<CharacterResponse>> {
        return this.client.get<JikanResponse<CharacterResponse>>(`/characters/${id}/full`);
    }

    /**
     * Retrieves basic character information by MyAnimeList ID
     * @param {number} id - MyAnimeList ID of the character
     * @returns {Promise<JikanResponse<CharacterResponse>>} Promise that resolves to character data
     * @example
     * ```typescript
     * const character = await jikan.characters.getCharacterById(1);
     * console.log(character.data.name);
     * console.log(character.data.favorites);
     * ```
     */
    getCharacterById(id: number): Promise<JikanResponse<CharacterResponse>> {
        return this.client.get<JikanResponse<CharacterResponse>>(`/characters/${id}`);
    }

    /**
     * Retrieves anime appearances for a specific character
     * @param {number} id - MyAnimeList ID of the character
     * @returns {Promise<JikanResponse<CharacterAnimeResponse[]>>} Promise that resolves to anime appearance data
     * @example
     * ```typescript
     * const anime = await jikan.characters.getCharacterAnime(1);
     * anime.data.forEach(appearance => {
     *   console.log({
     *     title: appearance.anime.title,
     *     role: appearance.role
     *   });
     * });
     * ```
     */
    getCharacterAnime(id: number): Promise<JikanResponse<CharacterAnimeResponse[]>> {
        return this.client.get<JikanResponse<CharacterAnimeResponse[]>>(`/characters/${id}/anime`);
    }

    /**
     * Retrieves manga appearances for a specific character
     * @param {number} id - MyAnimeList ID of the character
     * @returns {Promise<JikanResponse<CharacterMangaResponse[]>>} Promise that resolves to manga appearance data
     * @example
     * ```typescript
     * const manga = await jikan.characters.getCharacterManga(1);
     * manga.data.forEach(appearance => {
     *   console.log({
     *     title: appearance.manga.title,
     *     role: appearance.role
     *   });
     * });
     * ```
     */
    getCharacterManga(id: number): Promise<JikanResponse<CharacterMangaResponse[]>> {
        return this.client.get<JikanResponse<CharacterMangaResponse[]>>(`/characters/${id}/manga`);
    }

    /**
     * Retrieves voice actor information for a specific character
     * @param {number} id - MyAnimeList ID of the character
     * @returns {Promise<JikanResponse<CharacterVoiceActorResponse[]>>} Promise that resolves to voice actor data
     * @example
     * ```typescript
     * const voices = await jikan.characters.getCharacterVoices(1);
     * voices.data.forEach(voice => {
     *   console.log({
     *     name: voice.person.name,
     *     language: voice.language
     *   });
     * });
     * ```
     */
    getCharacterVoices(id: number): Promise<JikanResponse<CharacterVoiceActorResponse[]>> {
        return this.client.get<JikanResponse<CharacterVoiceActorResponse[]>>(`/characters/${id}/voices`);
    }

    /**
     * Retrieves pictures/images for a specific character
     * @param {number} id - MyAnimeList ID of the character
     * @returns {Promise<JikanResponse<CharacterPictureResponse[]>>} Promise that resolves to picture data
     * @example
     * ```typescript
     * const pictures = await jikan.characters.getCharacterPictures(1);
     * pictures.data.forEach(picture => {
     *   console.log({
     *     large: picture.large_image_url,
     *     small: picture.small_image_url
     *   });
     * });
     * ```
     */
    getCharacterPictures(id: number): Promise<JikanResponse<CharacterPictureResponse[]>> {
        return this.client.get<JikanResponse<CharacterPictureResponse[]>>(`/characters/${id}/pictures`);
    }

    /**
     * Searches for characters
     * @param {CharacterSearchParams} [params={}] - Search parameters
     * @returns {Promise<JikanResponse<CharacterResponse[]>>} Promise that resolves to search results
     * @example
     * ```typescript
     * const characters = await jikan.characters.searchCharacters({ q: 'Spike' });
     * characters.data.forEach(character => {
     *   console.log(character.name);
     * });
     * 
     * // Advanced search
     * const results = await jikan.characters.searchCharacters({
     *   q: 'main character',
     *   order_by: 'favorites',
     *   sort: 'desc',
     *   limit: 10
     * });
     * ```
     */
    async searchCharacters(params: CharacterSearchParams = {}): Promise<JikanResponse<CharacterResponse[]>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        
        const url = `characters${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        return this.client.get<CharacterResponse[]>(url);
    }
}