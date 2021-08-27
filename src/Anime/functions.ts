import {
    AnimeCharacter,
    AnimeDataById,
    AnimeEpisodes,
    AnimeStaff,
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

export async function getAnimeStaff(
    mal_id: number
): Promise<Array<AnimeStaff>> {
    const urlString = `anime/${mal_id}/staff`;
    const result = await makeRequest(urlString);
    return result as Array<AnimeStaff>;
}

export async function getAnimeEpisodes(
    mal_id: number,
    page?: number
): Promise<AnimeEpisodes> {
    const urlString = `anime/${mal_id}/episodes?page=${page ? page : "1"}`;
    const result = await makeRequest(urlString);
    return result as AnimeEpisodes;
}
