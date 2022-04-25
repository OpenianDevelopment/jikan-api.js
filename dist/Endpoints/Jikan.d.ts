import { JikanOptions } from "../Static/Interfaces";
import Anime from "./Anime";
import Manga from "./Manga";
import Characters from "./Characters";
export default class Jikan {
    private _baseurl;
    /**
     * @type {Anime} Anime class
     * @name Jikan#anime
     */
    anime: Anime;
    /**
     * @type {Manga} Manga class
     * @name Jikan#manga
     */
    manga: Manga;
    characters: Characters;
    constructor(options?: JikanOptions);
    makeRequest(url: string): Promise<any>;
}
