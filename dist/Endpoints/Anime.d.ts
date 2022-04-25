import Jikan from "./Jikan";
import { AnimeCharacter, AnimeDataById, AnimeEpisodeById, AnimeEpisodes, AnimeForum, AnimeMoreInfo, AnimeNews, AnimePictures, AnimeRecommendations, AnimeRelations, AnimeReviews, AnimeSearch, AnimeSearchQuery, AnimeStaff, AnimeStatistics, AnimeThemes, AnimeUserUpdates, AnimeVideos } from "../Static/AnimeInterface";
export default class Anime {
    private manager;
    constructor(manager: Jikan);
    /**
     * Get anime details using it's MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeDataById>}
     */
    getAnimeById(mal_id: number): Promise<AnimeDataById>;
    /**
     * Get Character list of an anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<Array<AnimeCharacter>>}
     */
    getAnimeCharacters(mal_id: number): Promise<Array<AnimeCharacter>>;
    /**
     * Get Staff details of an anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeStaff>}
     */
    getAnimeStaff(mal_id: number): Promise<AnimeStaff>;
    /**
     * Get episode list of an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] Page Number from which it needs to be fetched
     * @return {Promise<AnimeEpisodes>}
     */
    getAnimeEpisodes(mal_id: number, page?: number): Promise<AnimeEpisodes>;
    /**
     * Get Episode detail
     * @param {number} mal_id MyAnimeList ID
     * @param {number} episode Episode number
     * @return {Promise<AnimeEpisodeById>}
     */
    getAnimeEpisodeById(mal_id: number, episode: number): Promise<AnimeEpisodeById>;
    /**
     * Get News related to an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] Page Number
     */
    getAnimeNews(mal_id: number, page?: number): Promise<AnimeNews>;
    /**
     * Get anime videos
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeVideos>>}
     */
    getAnimeVideos(mal_id: number): Promise<AnimeVideos>;
    /**
     * Get Anime Pictures
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimePictures>}
     */
    getAnimePictures(mal_id: number): Promise<AnimePictures>;
    /**
     * Get anime statistics
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeStatistics>}
     */
    getAnimeStatistics(mal_id: string): Promise<AnimeStatistics>;
    /**
     * Get more info about the anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise <AnimeMoreInfo>}
     */
    getAnimeMoreInfo(mal_id: number): Promise<AnimeMoreInfo>;
    /**
     * Get recommendation based on anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeRecommendations>}
     */
    getAnimeRecommendations(mal_id: number): Promise<AnimeRecommendations>;
    /**
     * Get anime related forums
     * @param {number} mal_id MyAnimeList ID
     * @param {"all" | "episode" | "other" } topic
     * @return {Promise<AnimeForum>}
     */
    getAnimeForum(mal_id: number, topic?: "all" | "episode" | "other"): Promise<AnimeForum>;
    /**
     * Get user updates of an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] page number
     * @return {Promise<AnimeUserUpdates>}
     */
    getAnimeUserUpdates(mal_id: number, page?: number): Promise<AnimeUserUpdates>;
    /**
     * Get Anime Reviews
     * @param {number} mal_id MyAnimeList ID
     * @param {number} page Page Number
     * @return {Promise<AnimeReviews>}
     */
    getAnimeReviews(mal_id: number, page?: number): Promise<AnimeReviews>;
    /**
     * Get anime relations
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeRelations>}
     */
    getAnimeRelations(mal_id: number): Promise<AnimeRelations>;
    /**
     * Get anime themes
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeThemes>}
     */
    getAnimeThemes(mal_id: number): Promise<AnimeThemes>;
    /**
     * Search for an anime using query parameters
     * @param {AnimeSearchQuery} search_query Query parameters
     * @return {Promise<AnimeSearch>}
     */
    getAnimeSearch(search_query: AnimeSearchQuery): Promise<AnimeSearch>;
}
