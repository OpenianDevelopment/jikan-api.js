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
     * Get a manga using it's MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaDataById>}
     */
    getMangaById(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the characters of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaCharacters>}
     */
    getMangaCharacters(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/characters`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the news of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaNews>}
     */
    getMangaNews(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/news`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the topics of a manga
     * @param {number} mal_id MyAnimeList ID
     * @param {MangaTopicFilter} [filter] Topic filters
     * @return {Promise<MangaTopics>}
     */
    getMangaTopics(mal_id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let urlString = `/manga/${mal_id}/forum`;
            if (filter)
                urlString + `?filter=${filter}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the pictures of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaPictures>}
     */
    getMangaPictures(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/pictures`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get statistics of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaStatistics>}
     */
    getMangaStatistics(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/statistics`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get more info about a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaMoreInfo>}
     */
    getMangaMoreInfo(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/moreinfo`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get manga recommendations
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaRecommendations>}
     */
    getMangaRecommendations(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/recommendations`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get user updates of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaUserUpdates>}
     */
    getMangaUserUpdates(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/userupdates`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get manga reviews
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaReviews>}
     */
    getMangaReviews(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/reviews`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the relations of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaRelations>}
     */
    getMangaRelations(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/relations`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get the external links of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaExternal>}
     */
    getMangaExternal(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga/${mal_id}/external`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Search for a manga using query parameters
     * @param {MangaSearchQuery} query Query parameters
     * @return {Promise<MangaSearch>}
     */
    getMangaSearch(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/manga?
    ${query.page ? "&page=" + query.page : ""}
    ${query.limit ? "&limit=" + query.limit : ""}
    ${query.q ? "&q=" + query.q : ""}
    ${query.type ? "&type=" + query.type : ""}
    ${query.score ? "&score=" + query.score : ""}
    ${query.min_score ? "&min_score=" + query.min_score : ""}
    ${query.max_score ? "&max_score=" + query.max_score : ""}
    ${query.status ? "&status=" + query.status : ""}
    ${query.sfw ? "&sfw=" + query.sfw : ""}
    ${query.genres ? "&genres=" + query.genres : ""}
    ${query.genres_exclude ? "&genres_exclude=" + query.genres_exclude : ""}
    ${query.order_by ? "&order_by=" + query.order_by : ""}
    ${query.sort ? "&sort=" + query.sort : ""}
    ${query.letter ? "&letter=" + query.letter : ""}
    ${query.magazine ? "&magazine=" + query.magazine : ""}
    `.replace(/\n/g, ""); //Making sure there is no new lines
            return yield this.manager.makeRequest(urlString);
        });
    }
}
exports.default = Characters;
