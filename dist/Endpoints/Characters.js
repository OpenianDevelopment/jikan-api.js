"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Characters {
    constructor(manager) {
        this.manager = manager;
    }
    /**
     * Get a character using its MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterById>}
     */
    getCharacterById(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/characters/${mal_id}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the anime of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterAnime>}
     */
    getCharacterAnime(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/characters/${mal_id}/anime`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the manga of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterManga>}
     */
    getCharacterManga(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/characters/${mal_id}/manga`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the voice actors of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterVoiceActors>}
     */
    getCharacterVoiceActors(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/characters/${mal_id}/voices`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the pictures of a character
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<CharacterPictures>}
     */
    getCharacterPictures(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/characters/${mal_id}/pictures`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Search for a character using query parameters
     * @param {CharacterSearchQuery} query Query parameters
     * @return {Promise<CharacterPictures>}
     */
    getCharactersSearch(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/characters?
    ${query.page ? "&page=" + query.page : ""}
    ${query.limit ? "&limit=" + query.limit : ""}
    ${query.q ? "&q=" + query.q : ""}
    ${query.order_by ? "&order_by=" + query.order_by : ""}
    ${query.sort ? "&sort=" + query.sort : ""}
    ${query.letter ? "&letter=" + query.letter : ""}
    `.replace(/\n/g, ""); //removing 'new lines'
            return yield this.manager.makeRequest(urlString);
        });
    }
}
exports.default = Characters;
