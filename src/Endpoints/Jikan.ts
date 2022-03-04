import fetch from "node-fetch";
import { JikanOptions } from "../Static/Interfaces";
import Anime from "./Anime";

export default class Jikan {
    private _baseurl: string;
    public anime: Anime = new Anime(this);

    constructor(options?: JikanOptions) {
        if (options)
            this._baseurl = `http${options.secure ? "s" : ""}://${options.host}:${options.port}`;
        else
            this._baseurl = "https://api.jikan.moe/v4";
    }

    public async makeRequest(url: string): Promise<any> {
        return await fetch(`${this._baseurl}${url}`, {
            method: "GET"
        }).then((res) => res.json());
    }
}