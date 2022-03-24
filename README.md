<div align="center">
  <br />
  <p>
    <a href="https://jikan.openian.dev"><img src="https://cdn.discordapp.com/attachments/735903738967097455/880782970695331860/unknown-removebg-preview.png" width="546" alt="discord.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://menhera-chan.in/support"><img src="https://img.shields.io/discord/735899211677041099?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>

[comment]: <> (    <a href="https://www.npmjs.com/package/chiro.js"><img src="https://img.shields.io/npm/v/chiro.js.svg?maxAge=3600" alt="NPM version" /></a>)

[comment]: <> (    <a href="https://www.npmjs.com/package/chiro.js"><img src="https://img.shields.io/npm/dt/chiro.js.svg?maxAge=3600" alt="NPM downloads" /></a>)
    
<a href="https://www.patreon.com/rohank05"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
</div>

## About

jikan-api.js is a wrapper for Jikan v4 API. It has the method name which is similar to jikan category making it easier for user. 


## Installation

**Node.js 12.0.0 or newer is required.**

```sh-session
npm install jikan-api.js
```

## Example usage

```js
const {Jikan} = require('jikan-api.js');
const manager = new Jikan();

manager.anime.getAnimeById(1).then(res=> console.log(res));
```

## Available Endpoints:
- Anime
- Manga
- Characters

## Links

- Documentation is unavailable and in WIP. (Want to help join our discord server and ping any dev available).
- [Discord server](https://menhera-chan.in/support)
- [GitHub](https://github.com/OpenianDevelopment/jikan-api.js)
- [NPM](https://www.npmjs.com/package/jikan-api.js)

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction kindly create an github issue or join our official [Support Server](https://menhera-chan.in/support).
