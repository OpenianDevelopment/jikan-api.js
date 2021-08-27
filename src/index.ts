import { getAnimeById, getAnimeCharacters } from "./Anime/functions";

(async () => {
    const res = await getAnimeCharacters(1);
    console.log(res);
})();
