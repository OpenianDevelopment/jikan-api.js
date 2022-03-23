import fetch from "node-fetch";
import { JikanOptions } from "../Static/Interfaces";
import Anime from "./Anime";
import Manga from "./Manga";
import Characters from "./Characters";

export default class Jikan {
    private _baseurl: string;
    /**
     * @type {Anime} Anime class
     * @name Jikan#anime
     */
    public anime: Anime;
    /**
     * @type {Manga} Manga class
     * @name Jikan#manga
     */
    public manga: Manga;
    public characters: Characters;

    constructor(options?: JikanOptions) {
        if (options)
            this._baseurl = `http${options.secure ? "s" : ""}://${options.host}:${options.port}`;
        else
            this._baseurl = "https://api.jikan.moe/v4";

        this.anime = new Anime(this);
        this.manga = new Manga(this);
        this.characters = new Characters(this);
    }

    public async makeRequest(url: string): Promise<any> {
        return await fetch(`${this._baseurl}${url}`, {
            method: "GET"
        }).then((res) => res.json());
    }
}