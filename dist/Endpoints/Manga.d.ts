import { MangaDataById, MangaCharacters, MangaNews, MangaTopics, MangaPictures, MangaStatistics, MangaMoreInfo, MangaRecommendations, MangaUserUpdates, MangaReviews, MangaRelations, MangaExternal, MangaSearch, MangaTopicFilter, MangaSearchQuery } from "../Static/MangaInterface";
import Jikan from "./Jikan";
export default class Characters {
    private manager;
    constructor(manager: Jikan);
    /**
     * Get a manga using it's MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaDataById>}
     */
    getMangaById(mal_id: number): Promise<MangaDataById>;
    /**
     * Get the characters of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaCharacters>}
     */
    getMangaCharacters(mal_id: number): Promise<MangaCharacters>;
    /**
     * Get the news of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaNews>}
     */
    getMangaNews(mal_id: number): Promise<MangaNews>;
    /**
     * Get the topics of a manga
     * @param {number} mal_id MyAnimeList ID
     * @param {MangaTopicFilter} [filter] Topic filters
     * @return {Promise<MangaTopics>}
     */
    getMangaTopics(mal_id: number, filter?: MangaTopicFilter): Promise<MangaTopics>;
    /**
     * Get the pictures of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaPictures>}
     */
    getMangaPictures(mal_id: number): Promise<MangaPictures>;
    /**
     * Get statistics of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaStatistics>}
     */
    getMangaStatistics(mal_id: number): Promise<MangaStatistics>;
    /**
     * Get more info about a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaMoreInfo>}
     */
    getMangaMoreInfo(mal_id: number): Promise<MangaMoreInfo>;
    /**
     * Get manga recommendations
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaRecommendations>}
     */
    getMangaRecommendations(mal_id: number): Promise<MangaRecommendations>;
    /**
     * Get user updates of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaUserUpdates>}
     */
    getMangaUserUpdates(mal_id: number): Promise<MangaUserUpdates>;
    /**
     * Get manga reviews
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaReviews>}
     */
    getMangaReviews(mal_id: number): Promise<MangaReviews>;
    /**
     * Get the relations of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaRelations>}
     */
    getMangaRelations(mal_id: number): Promise<MangaRelations>;
    /**
     * Get the external links of a manga
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<MangaExternal>}
     */
    getMangaExternal(mal_id: number): Promise<MangaExternal>;
    /**
     * Search for a manga using query parameters
     * @param {MangaSearchQuery} query Query parameters
     * @return {Promise<MangaSearch>}
     */
    getMangaSearch(query: MangaSearchQuery): Promise<MangaSearch>;
}
