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
class Anime {
    constructor(manager) {
        this.manager = manager;
    }
    /**
     * Get anime details using it's MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeDataById>}
     */
    getAnimeById(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get Character list of an anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<Array<AnimeCharacter>>}
     */
    getAnimeCharacters(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/characters`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get Staff details of an anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeStaff>}
     */
    getAnimeStaff(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/staff`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get episode list of an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] Page Number from which it needs to be fetched
     * @return {Promise<AnimeEpisodes>}
     */
    getAnimeEpisodes(mal_id, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/episodes?page=${page ? page : "1"}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get Episode detail
     * @param {number} mal_id MyAnimeList ID
     * @param {number} episode Episode number
     * @return {Promise<AnimeEpisodeById>}
     */
    getAnimeEpisodeById(mal_id, episode) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/episodes/${episode}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get News related to an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] Page Number
     */
    getAnimeNews(mal_id, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/news?page=${page}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get anime videos
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeVideos>>}
     */
    getAnimeVideos(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/videos`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get Anime Pictures
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimePictures>}
     */
    getAnimePictures(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/pictures`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get anime statistics
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeStatistics>}
     */
    getAnimeStatistics(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/statistics`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get more info about the anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise <AnimeMoreInfo>}
     */
    getAnimeMoreInfo(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/moreinfo`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get recommendation based on anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeRecommendations>}
     */
    getAnimeRecommendations(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/recommendations`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get anime related forums
     * @param {number} mal_id MyAnimeList ID
     * @param {"all" | "episode" | "other" } topic
     * @return {Promise<AnimeForum>}
     */
    getAnimeForum(mal_id, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/forum?topic=${topic ? topic : "all"}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get user updates of an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] page number
     * @return {Promise<AnimeUserUpdates>}
     */
    getAnimeUserUpdates(mal_id, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/userupdates?page=${page ? page : "1"}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get Anime Reviews
     * @param {number} mal_id MyAnimeList ID
     * @param {number} page Page Number
     * @return {Promise<AnimeReviews>}
     */
    getAnimeReviews(mal_id, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/reviews?page=${page ? page : "1"}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get anime relations
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeRelations>}
     */
    getAnimeRelations(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/relations`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Get anime themes
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeThemes>}
     */
    getAnimeThemes(mal_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `/anime/${mal_id}/themes`;
            return yield this.manager.makeRequest(urlString);
        });
    }
    /**
     * Search for an anime using query parameters
     * @param {AnimeSearchQuery} search_query Query parameters
     * @return {Promise<AnimeSearch>}
     */
    getAnimeSearch(search_query) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlString = `anime?${search_query.q ? "&q=" + search_query.q : ""}${search_query.page ? "&page=" + search_query.page : ""}${search_query.limit ? "&limit=" + search_query.limit : ""}${search_query.type ? "&type=" + search_query.type : ""}${search_query.score ? "&score=" + search_query.score : ""}${search_query.status ? "&status=" + search_query.status : ""}${search_query.rating ? "&rating=" + search_query.rating : ""}${search_query.sort ? "&sort=" + search_query.sort : ""}${search_query.sfw ? "&sfw=" + search_query.sfw : ""}${search_query.genres ? "&genres=" + search_query.genres : ""}${search_query.letter ? "&letter=" + search_query.letter : ""}${search_query.producer
                ? "&producer=" + search_query.producer
                : ""}${search_query.order_by
                ? "&order_by=" + search_query.order_by
                : ""}`;
            return yield this.manager.makeRequest(urlString);
        });
    }
}
exports.default = Anime;
