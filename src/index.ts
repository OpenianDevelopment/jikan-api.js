import {
    getAnimeById,
    getAnimeCharacters,
    getAnimeEpisodeById,
} from "./Anime/functions";

(async () => {
    const res = await getAnimeEpisodeById(1, 1);
    console.log(res.data.url);
})();
