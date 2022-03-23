import {
    MangaDataById,
    MangaCharacters,
    MangaNews,
    MangaTopics,
    MangaPictures,
    MangaStatistics,
    MangaMoreInfo,
    MangaRecommendations,
    MangaUserUpdates,
    MangaReviews,
    MangaRelations,
    MangaExternal,
    MangaSearch,
    MangaTopicFilter,
    MangaSearchQuery,
} from "../Static/MangaInterface";
import Jikan from "./Jikan";

export default class Characters {
    private manager: Jikan;

    constructor(manager: Jikan) {
        this.manager = manager;
    }

    /**
     * Get a manga using it's MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaDataById>}
     */
    public async getMangaById(mal_id: number): Promise<MangaDataById> {
        const urlString = `/manga/${mal_id}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get the characters of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaCharacters>}
     */
    public async getMangaCharacters(mal_id: number): Promise<MangaCharacters> {
        const urlString = `/manga/${mal_id}/characters`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get the news of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaNews>}
     */
    public async getMangaNews(mal_id: number): Promise<MangaNews> {
        const urlString = `/manga/${mal_id}/news`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get the topics of a manga
     * @param {number} mal_id MyAnimeList ID
     * @param {MangaTopicFilter} [filter] Topic filters
     * @return {Promise<MangaTopics>}
     */
    public async getMangaTopics(
        mal_id: number,
        filter?: MangaTopicFilter
    ): Promise<MangaTopics> {
        let urlString = `/manga/${mal_id}/forum`;
        if (filter) urlString + `?filter=${filter}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get the pictures of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaPictures>}
     */
    public async getMangaPictures(mal_id: number): Promise<MangaPictures> {
        const urlString = `/manga/${mal_id}/pictures`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get statistics of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaStatistics>}
     */
    public async getMangaStatistics(mal_id: number): Promise<MangaStatistics> {
        const urlString = `/manga/${mal_id}/statistics`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get more info about a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaMoreInfo>}
     */
    public async getMangaMoreInfo(mal_id: number): Promise<MangaMoreInfo> {
        const urlString = `/manga/${mal_id}/moreinfo`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get manga recommendations
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaRecommendations>}
     */
    public async getMangaRecommendations(
        mal_id: number
    ): Promise<MangaRecommendations> {
        const urlString = `/manga/${mal_id}/recommendations`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get user updates of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaUserUpdates>}
     */
    public async getMangaUserUpdates(
        mal_id: number
    ): Promise<MangaUserUpdates> {
        const urlString = `/manga/${mal_id}/userupdates`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get manga reviews
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaReviews>}
     */
    public async getMangaReviews(mal_id: number): Promise<MangaReviews> {
        const urlString = `/manga/${mal_id}/reviews`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get the relations of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaRelations>}
     */
    public async getMangaRelations(mal_id: number): Promise<MangaRelations> {
        const urlString = `/manga/${mal_id}/relations`;
        return await this.manager.makeRequest(urlString);
    }


    /**
     * Get the external links of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaExternal>}
     */
    public async getMangaExternal(mal_id: number): Promise<MangaExternal> {
        const urlString = `/manga/${mal_id}/external`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Search for a manga using query parameters
     * @param {MangaSearchQuery} query Query parameters
     * @return {Promise<MangaSearch>}
     */
    public async getMangaSearch(query: MangaSearchQuery): Promise<MangaSearch> {
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
        return await this.manager.makeRequest(urlString);
    }
}
