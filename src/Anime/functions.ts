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
    AnimeVideos,
} from "./interfaces";
import { makeRequest } from "../Utils/APIRequest";
export async function getAnimeById(mal_id: number): Promise<AnimeDataById> {
    const urlString = `anime/${mal_id}`;
    const result = await makeRequest(urlString);
    return result as AnimeDataById;
}

export async function getAnimeCharacters(
    mal_id: number
): Promise<Array<AnimeCharacter>> {
    const urlString = `anime/${mal_id}/characters`;
    const result = await makeRequest(urlString);
    return result as Array<AnimeCharacter>;
}

export async function getAnimeStaff(mal_id: number): Promise<AnimeStaff> {
    const urlString = `anime/${mal_id}/staff`;
    const result = await makeRequest(urlString);
    return result as AnimeStaff;
}

export async function getAnimeEpisodes(
    mal_id: number,
    page: number = 1
): Promise<AnimeEpisodes> {
    const urlString = `anime/${mal_id}/episodes?page=${page}`;
    const result = await makeRequest(urlString);
    return result as AnimeEpisodes;
}

export async function getAnimeEpisodeById(
    mal_id: number,
    episode: number
): Promise<AnimeEpisodeById> {
    const urlString = `anime/${mal_id}/episodes/${episode}`;
    const result = await makeRequest(urlString);
    return result as AnimeEpisodeById;
}

export async function getAnimeNews(
    mal_id: number,
    page: number = 1
): Promise<AnimeNews> {
    const urlString = `anime/${mal_id}/news?page=${page}`;
    const result = await makeRequest(urlString);
    return result as AnimeNews;
}

export async function getAnimeVideos(mal_id: number): Promise<AnimeVideos> {
    const urlString = `anime/${mal_id}/videos`;
    const result = await makeRequest(urlString);
    return result as AnimeVideos;
}

export async function getAnimePictures(mal_id: number): Promise<AnimePictures> {
    const urlString = `anime/${mal_id}/pictures`;
    const result = await makeRequest(urlString);
    return result as AnimePictures;
}

export async function getAnimeStatistics(
    mal_id: number
): Promise<AnimeStatistics> {
    const urlString = `anime/${mal_id}/statistics`;
    const result = await makeRequest(urlString);
    return result as AnimeStatistics;
}

export async function getAnimeMoreInfo(mal_id: number): Promise<AnimeMoreInfo> {
    const urlString = `anime/${mal_id}/moreinfo`;
    const result = await makeRequest(urlString);
    return result as AnimeMoreInfo;
}

export async function getAnimeRecommendations(
    mal_id: number
): Promise<AnimeRecommendations> {
    const urlString = `anime/${mal_id}/recommendations`;
    const result = await makeRequest(urlString);
    return result as AnimeRecommendations;
}

export async function getAnimeForum(
    mal_id: number,
    topic: "all" | "episode" | "other" = "all"
): Promise<AnimeForum> {
    const urlString = `anime/${mal_id}/forum?topic=${topic}`;
    const result = await makeRequest(urlString);
    return result as AnimeForum;
}

export async function getAnimeUserUpdates(
    mal_id: number,
    page: number = 1
): Promise<AnimeUserUpdates> {
    const urlString = `anime/${mal_id}/userupdates`;
    const result = await makeRequest(urlString);
    return result as AnimeUserUpdates;
}

export async function getAnimeReviews(
    mal_id: number,
    page: number = 1
): Promise<AnimeReviews> {
    const urlString = `anime/${mal_id}/reviews?page=${page}`;
    const result = await makeRequest(urlString);
    return result as AnimeReviews;
}

export async function getAnimeRelations(
    mal_id: number
): Promise<AnimeRelations> {
    const urlString = `anime/${mal_id}/relations`;
    const result = await makeRequest(urlString);
    return result as AnimeRelations;
}

export async function getAnimeThemes(mal_id: number): Promise<AnimeThemes> {
    const urlString = `anime/${mal_id}/themes`;
    const result = await makeRequest(urlString);
    return result as AnimeThemes;
}

export async function getAnimeSearch(
    AnimeSearchQuery: AnimeSearchQuery
): Promise<AnimeSearch> {
    const urlString = `anime?${
        AnimeSearchQuery.q ? "&q=" + AnimeSearchQuery.q : ""
    }${AnimeSearchQuery.page ? "&page=" + AnimeSearchQuery.page : ""}${
        AnimeSearchQuery.limit ? "&limit=" + AnimeSearchQuery.limit : ""
    }${AnimeSearchQuery.type ? "&type=" + AnimeSearchQuery.type : ""}${
        AnimeSearchQuery.score ? "&score=" + AnimeSearchQuery.score : ""
    }${AnimeSearchQuery.status ? "&status=" + AnimeSearchQuery.status : ""}${
        AnimeSearchQuery.rating ? "&rating=" + AnimeSearchQuery.rating : ""
    }${AnimeSearchQuery.sort ? "&sort=" + AnimeSearchQuery.sort : ""}${
        AnimeSearchQuery.sfw ? "&sfw=" + AnimeSearchQuery.sfw : ""
    }${AnimeSearchQuery.genres ? "&genres=" + AnimeSearchQuery.genres : ""}${
        AnimeSearchQuery.letter ? "&letter=" + AnimeSearchQuery.letter : ""
    }${
        AnimeSearchQuery.producer
            ? "&producer=" + AnimeSearchQuery.producer
            : ""
    }${
        AnimeSearchQuery.order_by
            ? "&order_by=" + AnimeSearchQuery.order_by
            : ""
    }`;
    console.log(urlString);
    const result = await makeRequest(urlString);
    return result as AnimeSearch;
}
