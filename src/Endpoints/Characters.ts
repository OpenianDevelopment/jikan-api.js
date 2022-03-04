import {
    CharacterById,
    CharacterAnime,
    CharacterManga,
    CharacterVoiceActors,
    CharacterPictures,
    CharacterSearch,
    CharacterSearchQuery,
} from "../Static/CharsInterface";
import { makeRequest } from "../Utils/APIRequest";

export async function getCharacterById(mal_id: number): Promise<CharacterById> {
    const urlString = `characters/${mal_id}`;
    const result = await makeRequest(urlString);
    return result as CharacterById;
}

export async function getCharacterAnime(
    mal_id: number
): Promise<CharacterAnime> {
    const urlString = `characters/${mal_id}/anime`;
    const result = await makeRequest(urlString);
    return result as CharacterAnime;
}

export async function getCharacterManga(
    mal_id: number
): Promise<CharacterManga> {
    const urlString = `characters/${mal_id}/manga`;
    const result = await makeRequest(urlString);
    return result as CharacterManga;
}

export async function getCharacterVoiceActors(
    mal_id: number
): Promise<CharacterVoiceActors> {
    const urlString = `characters/${mal_id}/voices`;
    const result = await makeRequest(urlString);
    return result as CharacterVoiceActors;
}

export async function getCharacterPictures(
    mal_id: number
): Promise<CharacterPictures> {
    const urlString = `characters/${mal_id}/pictures`;
    const result = await makeRequest(urlString);
    return result as CharacterPictures;
}

export async function getCharactersSearch(
    query: CharacterSearchQuery
): Promise<CharacterSearch> {
    const urlString = `characters?
    ${query.page ? "&page=" + query.page : ""}
    ${query.limit ? "&limit=" + query.limit : ""}
    ${query.q ? "&q=" + query.q : ""}
    ${query.order_by ? "&order_by=" + query.order_by : ""}
    ${query.sort ? "&sort=" + query.sort : ""}
    ${query.letter ? "&letter=" + query.letter : ""}
    `.replace(/\n/g, ""); //removing 'new lines'
    const result = await makeRequest(urlString);
    return result as CharacterSearch;
}
