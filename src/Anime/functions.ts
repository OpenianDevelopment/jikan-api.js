import { AnimeCharacter, AnimeDataById } from "./interfaces";
import { makeRequest } from "../Utils/APIRequest";

export async function getAnimeById(animeId: number): Promise<AnimeDataById> {
    const urlString = `anime/${animeId}`;
    const result = await makeRequest(urlString);
    return result as AnimeDataById;
}

export async function getAnimeCharacters(
    animeId: number
): Promise<Array<AnimeCharacter>> {
    const urlString = `anime/${animeId}/characters`;
    const result = await makeRequest(urlString);
    return result as Array<AnimeCharacter>;
}
