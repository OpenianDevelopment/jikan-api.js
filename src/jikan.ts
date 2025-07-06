import JikanHttpClient from "./client/http-client";
import { Anime } from "./endpoints/anime";

class Jikan {
    private _baseUrl: string = "https://api.jikan.moe/v4";
    client: JikanHttpClient;
    anime: Anime;
    constructor(baseUrl?: string) {
        if (baseUrl) {
            this._baseUrl = baseUrl;
        }
        this.client = new JikanHttpClient(this._baseUrl);
        this.anime = new Anime(this.client);
    }
}

export default Jikan;