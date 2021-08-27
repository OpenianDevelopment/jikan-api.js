import fetch from "node-fetch";

export async function makeRequest(urlString: string): Promise<any> {
    return await fetch(`https://api.jikan.moe/v4/${urlString}`, {
        method: "GET",
    }).then((res) => res.json());
}
