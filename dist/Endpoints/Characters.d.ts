import { CharacterById, CharacterAnime, CharacterManga, CharacterVoiceActors, CharacterPictures, CharacterSearch, CharacterSearchQuery } from "../Static/CharactersInterface";
import Jikan from "./Jikan";
export default class Characters {
    private manager;
    constructor(manager: Jikan);
    /**
     * Get a character using its MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterById>}
     */
    getCharacterById(mal_id: number): Promise<CharacterById>;
    /**
     * Get the anime of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterAnime>}
     */
    getCharacterAnime(mal_id: number): Promise<CharacterAnime>;
    /**
     * Get the manga of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterManga>}
     */
    getCharacterManga(mal_id: number): Promise<CharacterManga>;
    /**
     * Get the voice actors of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterVoiceActors>}
     */
    getCharacterVoiceActors(mal_id: number): Promise<CharacterVoiceActors>;
    /**
     * Get the pictures of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterPictures>}
     */
    getCharacterPictures(mal_id: number): Promise<CharacterPictures>;
    /**
     * Search for a character using query parameters
     * @param {CharacterSearchQuery} query Query parameters
     * @return {Promise<CharacterPictures>}
     */
    getCharactersSearch(query: CharacterSearchQuery): Promise<CharacterSearch>;
}
