import Jikan from "./Jikan";
import {
    AnimeCharacter,
    AnimeDataById,
    AnimeEpisodeById,
    AnimeEpisodes,
    AnimeForum,
    AnimeMoreInfo,
    AnimeNews,
    AnimePictures,
    AnimeRecommendations,
    AnimeRelations,
    AnimeReviews,
    AnimeSearch,
    AnimeSearchQuery,
    AnimeStaff,
    AnimeStatistics,
    AnimeThemes,
    AnimeUserUpdates,
    AnimeVideos
} from "../Static/AnimeInterface";


export default class Anime {
    private manager: Jikan;

    constructor(manager: Jikan) {
        this.manager = manager;
    }

    /**
     * Get anime details using it's MyAnimeList ID
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeDataById>}
     */
    public async getAnimeById(mal_id: number): Promise<AnimeDataById> {
        const urlString = `/anime/${mal_id}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get Character list of an anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<Array<AnimeCharacter>>}
     */
    public async getAnimeCharacters(mal_id: number): Promise<Array<AnimeCharacter>> {
        const urlString = `/anime/${mal_id}/characters`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get Staff details of an anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeStaff>}
     */
    public async getAnimeStaff(mal_id: number): Promise<AnimeStaff> {
        const urlString = `/anime/${mal_id}/staff`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get episode list of an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] Page Number from which it needs to be fetched
     * @return {Promise<AnimeEpisodes>}
     */
    public async getAnimeEpisodes(mal_id: number, page?: number): Promise<AnimeEpisodes> {
        const urlString = `/anime/${mal_id}/episodes?page=${page ? page : "1"}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get Episode detail
     * @param {number} mal_id MyAnimeList ID
     * @param {number} episode Episode number
     * @return {Promise<AnimeEpisodeById>}
     */
    public async getAnimeEpisodeById(mal_id: number, episode: number): Promise<AnimeEpisodeById> {
        const urlString = `/anime/${mal_id}/episodes/${episode}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get News related to an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] Page Number
     */
    public async getAnimeNews(mal_id: number, page?: number): Promise<AnimeNews> {
        const urlString = `/anime/${mal_id}/news?page=${page}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get anime videos
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeVideos>>}
     */
    public async getAnimeVideos(mal_id: number): Promise<AnimeVideos> {
        const urlString = `/anime/${mal_id}/videos`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get Anime Pictures
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimePictures>}
     */
    public async getAnimePictures(mal_id: number): Promise<AnimePictures> {
        const urlString = `/anime/${mal_id}/pictures`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get anime statistics
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeStatistics>}
     */
    public async getAnimeStatistics(mal_id: string): Promise<AnimeStatistics> {
        const urlString = `/anime/${mal_id}/statistics`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get more info about the anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise <AnimeMoreInfo>}
     */
    public async getAnimeMoreInfo(mal_id: number): Promise<AnimeMoreInfo> {
        const urlString = `/anime/${mal_id}/moreinfo`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get recommendation based on anime
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeRecommendations>}
     */
    public async getAnimeRecommendations(mal_id: number): Promise<AnimeRecommendations> {
        const urlString = `/anime/${mal_id}/recommendations`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get anime related forums
     * @param {number} mal_id MyAnimeList ID
     * @param {"all" | "episode" | "other" } topic
     * @return {Promise<AnimeForum>}
     */
    public async getAnimeForum(mal_id: number, topic?: "all" | "episode" | "other"): Promise<AnimeForum> {
        const urlString = `/anime/${mal_id}/forum?topic=${topic ? topic : "all"}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get user updates of an anime
     * @param {number} mal_id MyAnimeList ID
     * @param {number} [page=1] page number
     * @return {Promise<AnimeUserUpdates>}
     */
    public async getAnimeUserUpdates(mal_id: number, page?: number): Promise<AnimeUserUpdates> {
        const urlString = `/anime/${mal_id}/userupdates?page=${page ? page : "1"}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get Anime Reviews
     * @param {number} mal_id MyAnimeList ID
     * @param {number} page Page Number
     * @return {Promise<AnimeReviews>}
     */
    public async getAnimeReviews(mal_id: number, page?: number): Promise<AnimeReviews> {
        const urlString = `/anime/${mal_id}/reviews?page=${page ? page : "1"}`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get anime relations
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeRelations>}
     */
    public async getAnimeRelations(mal_id: number): Promise<AnimeRelations> {
        const urlString = `/anime/${mal_id}/relations`;
        return await this.manager.makeRequest(urlString);
    }

    /**
     * Get anime themes
     * @param {number} mal_id MyAnimeList ID
     * @return {Promise<AnimeThemes>}
     */
    public async getAnimeThemes(mal_id: number): Promise<AnimeThemes> {
        const urlString = `/anime/${mal_id}/themes`;
        return await this.manager.makeRequest(urlString);
    }

    public async getAnimeSearch(search_query: AnimeSearchQuery): Promise<AnimeSearch> {
        const urlString = `anime?${
            search_query.q ? "&q=" + search_query.q : ""
        }${search_query.page ? "&page=" + search_query.page : ""}${
            search_query.limit ? "&limit=" + search_query.limit : ""
        }${search_query.type ? "&type=" + search_query.type : ""}${
            search_query.score ? "&score=" + search_query.score : ""
        }${search_query.status ? "&status=" + search_query.status : ""}${
            search_query.rating ? "&rating=" + search_query.rating : ""
        }${search_query.sort ? "&sort=" + search_query.sort : ""}${
            search_query.sfw ? "&sfw=" + search_query.sfw : ""
        }${search_query.genres ? "&genres=" + search_query.genres : ""}${
            search_query.letter ? "&letter=" + search_query.letter : ""
        }${
            search_query.producer
                ? "&producer=" + search_query.producer
                : ""
        }${
            search_query.order_by
                ? "&order_by=" + search_query.order_by
                : ""
        }`;

        return await this.manager.makeRequest(urlString);
    }
}