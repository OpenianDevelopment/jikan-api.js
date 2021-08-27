import {
    AnimeCharacter,
    AnimeDataById,
    AnimeEpisodeById,
    AnimeEpisodes,
    AnimeNews,
    AnimeStaff,
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
