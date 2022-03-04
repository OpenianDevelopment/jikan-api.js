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
import { makeRequest } from "../Utils/APIRequest";

export async function getMangaById(mal_id: number): Promise<MangaDataById> {
    const urlString = `manga/${mal_id}`;
    const result = await makeRequest(urlString);
    return result as MangaDataById;
}

export async function getMangaCharacters(
    mal_id: number
): Promise<MangaCharacters> {
    const urlString = `manga/${mal_id}/characters`;
    const result = await makeRequest(urlString);
    return result as MangaCharacters;
}

export async function getMangaNews(mal_id: number): Promise<MangaNews> {
    const urlString = `manga/${mal_id}/news`;
    const result = await makeRequest(urlString);
    return result as MangaNews;
}

export async function getMangaTopics(
    mal_id: number,
    filter: MangaTopicFilter
): Promise<MangaTopics> {
    const urlString = `manga/${mal_id}/forum?filter=${filter}`;
    const result = await makeRequest(urlString);
    return result as MangaTopics;
}

export async function getMangaPictures(mal_id: number): Promise<MangaPictures> {
    const urlString = `manga/${mal_id}/pictures`;
    const result = await makeRequest(urlString);
    return result as MangaPictures;
}

export async function getMangaStatistics(
    mal_id: number
): Promise<MangaStatistics> {
    const urlString = `manga/${mal_id}/statistics`;
    const result = await makeRequest(urlString);
    return result as MangaStatistics;
}

export async function getMangaMoreInfo(mal_id: number): Promise<MangaMoreInfo> {
    const UrlString = `manga/${mal_id}/moreinfo`;
    const result = await makeRequest(UrlString);
    return result as MangaMoreInfo;
}
export async function getMangaRecommendations(
    mal_id: number
): Promise<MangaRecommendations> {
    const urlString = `manga/${mal_id}/recommendations`;
    const result = await makeRequest(urlString);
    return result as MangaRecommendations;
}

export async function getMangaUserUpdates(
    mal_id: number
): Promise<MangaUserUpdates> {
    const urlString = `manga/${mal_id}/userupdates`;
    const result = await makeRequest(urlString);
    return result as MangaUserUpdates;
}

export async function getMangaReviews(mal_id: number): Promise<MangaReviews> {
    const urlstring = `manga/${mal_id}/reviews`;
    const result = await makeRequest(urlstring);
    return result as MangaReviews;
}

export async function getMangaRelations(
    mal_id: number
): Promise<MangaRelations> {
    const urlstring = `manga/${mal_id}/relations`;
    const result = await makeRequest(urlstring);
    return result as MangaRelations;
}

export async function getMangaExternal(mal_id: number): Promise<MangaExternal> {
    const urlString = `manga/${mal_id}/external`;
    const result = await makeRequest(urlString);
    return result as MangaExternal;
}

export async function getMangaSearch(
    query: MangaSearchQuery
): Promise<MangaSearch> {
    const urlstring = `manga?
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
    const res = await makeRequest(urlstring);
    return res as MangaSearch;
}
