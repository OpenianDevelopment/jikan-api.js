import {
    CharacterById,
    CharacterAnime,
    CharacterManga,
    CharacterVoiceActors,
    CharacterPictures,
    CharacterSearch,
    CharacterSearchQuery,
} from "../Static/CharactersInterface";
import Jikan from "./Jikan";

export default class Characters {
    private manager: Jikan;

    constructor(manager: Jikan) {
        this.manager = manager;
    }

    /**
     * Get a character using its MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterById>}
     */
    public async getCharacterById(mal_id: number): Promise<CharacterById> {
        const urlString = `/characters/${mal_id}`;
        return await this.manager.makeRequest(urlString);
    }
    
    /**
     * Get the anime of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterAnime>}
     */
    public async getCharacterAnime(mal_id: number): Promise<CharacterAnime> {
        const urlString = `/characters/${mal_id}/anime`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get the manga of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterManga>}
     */
    public async getCharacterManga(mal_id: number): Promise<CharacterManga> {
        const urlString = `/characters/${mal_id}/manga`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get the voice actors of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterVoiceActors>}
     */
    public async getCharacterVoiceActors(
        mal_id: number
    ): Promise<CharacterVoiceActors> {
        const urlString = `/characters/${mal_id}/voices`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get the pictures of a character 
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterPictures>}
     */
    public async getCharacterPictures(
        mal_id: number
    ): Promise<CharacterPictures> {
        const urlString = `/characters/${mal_id}/pictures`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Search for a character using query parameters
     * @param {CharacterSearchQuery} query Query parameters
     * @return {Promise<CharacterPictures>}
     */
    public async getCharactersSearch(
        query: CharacterSearchQuery
    ): Promise<CharacterSearch> {
        const urlString = `/characters?
    ${query.page ? "&page=" + query.page : ""}
    ${query.limit ? "&limit=" + query.limit : ""}
    ${query.q ? "&q=" + query.q : ""}
    ${query.order_by ? "&order_by=" + query.order_by : ""}
    ${query.sort ? "&sort=" + query.sort : ""}
    ${query.letter ? "&letter=" + query.letter : ""}
    `.replace(/\n/g, ""); //removing 'new lines'
        return await this.manager.makeRequest(urlString);
    }
}
