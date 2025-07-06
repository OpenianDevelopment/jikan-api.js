# Jikan API.js

A modern TypeScript wrapper for the [Jikan API](https://jikan.moe/) - the unofficial MyAnimeList API.

[![npm version](https://badge.fury.io/js/jikan-api.js.svg)](https://badge.fury.io/js/jikan-api.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

## Features

- 🎯 **Full TypeScript support** with comprehensive type definitions
- 🚀 **Modern ES modules** - Tree-shakable and lightweight
- 📚 **Complete API coverage** - All Jikan v4 anime, manga, and character endpoints
- 🛡️ **Built-in error handling** - Graceful API error management
- 🧪 **Thoroughly tested** - 100% test coverage
- 📖 **Extensive documentation** - JSDoc comments for all methods

## Installation

```bash
npm install jikan-api.js
```

```bash
yarn add jikan-api.js
```

```bash
pnpm add jikan-api.js
```

## Quick Start

```typescript
import Jikan from 'jikan-api.js';

// Initialize the client
const jikan = new Jikan();

// Get anime information
const anime = await jikan.anime.getAnimeByFullId(1);
console.log(anime.data.titles[0].title); // "Cowboy Bebop"

// Get manga information
const manga = await jikan.manga.getMangaByFullId(1);
console.log(manga.data.titles[0].title); // "Monster"

// Get character information
const character = await jikan.characters.getCharacterByFullId(1);
console.log(character.data.name); // "Spike Spiegel"

// Search for anime
const animeResults = await jikan.anime.searchAnime({ 
  q: 'Naruto', 
  type: 'TV' 
});

// Search for manga
const mangaResults = await jikan.manga.searchManga({ 
  q: 'One Piece', 
  type: 'Manga' 
});
```

## API Reference

### Constructor

#### `new Jikan(baseUrl?: string)`

Creates a new Jikan API client instance.

```typescript
// Using default Jikan API URL
const jikan = new Jikan();

// Using custom base URL (for testing or proxies)
const jikan = new Jikan('https://custom-api.example.com/v4');
```

### Anime Endpoints

#### Basic Information

##### `getAnimeByFullId(id: number)`

Retrieves complete anime information by MyAnimeList ID.

```typescript
const anime = await jikan.anime.getAnimeByFullId(1);
console.log({
  title: anime.data.titles[0].title,
  score: anime.data.score,
  episodes: anime.data.episodes,
  status: anime.data.status
});
```

##### `searchAnime(params?: SearchParams)`

Search for anime with various filters.

```typescript
// Basic search
const results = await jikan.anime.searchAnime({ q: 'Attack on Titan' });

// Advanced search with filters
const filteredResults = await jikan.anime.searchAnime({
  q: 'Demon Slayer',
  type: 'TV',
  status: 'Finished Airing',
  min_score: 8.0,
  order_by: 'score',
  sort: 'desc',
  limit: 10
});
```

**Search Parameters:**
- `q?: string` - Search query
- `type?: string` - Anime type (TV, Movie, OVA, Special, ONA, Music)
- `score?: number` - Score filter
- `min_score?: number` - Minimum score
- `max_score?: number` - Maximum score
- `status?: string` - Airing status
- `rating?: string` - Age rating
- `sfw?: boolean` - Safe for work filter
- `genres?: string` - Comma-separated genre IDs
- `order_by?: string` - Field to order by
- `sort?: string` - Sort direction (asc, desc)
- `page?: number` - Page number
- `limit?: number` - Results per page

#### Characters & Staff

##### `getAnimeCharacters(id: number)`

Get character information for an anime.

```typescript
const characters = await jikan.anime.getAnimeCharacters(1);
characters.data.forEach(char => {
  console.log({
    name: char.character.name,
    role: char.role,
    voiceActors: char.voice_actors.map(va => va.person.name)
  });
});
```

##### `getAnimeStaff(id: number)`

Get staff information for an anime.

```typescript
const staff = await jikan.anime.getAnimeStaff(1);
staff.data.forEach(member => {
  console.log({
    name: member.person.name,
    positions: member.positions
  });
});
```

#### Episodes

##### `getAnimeEpisodes(id: number, page?: number)`

Get episode list for an anime.

```typescript
// Get first page of episodes
const episodes = await jikan.anime.getAnimeEpisodes(1);

// Get specific page
const episodesPage2 = await jikan.anime.getAnimeEpisodes(1, 2);

episodes.data.forEach(episode => {
  console.log({
    number: episode.mal_id,
    title: episode.title,
    filler: episode.filler,
    recap: episode.recap
  });
});
```

##### `getAnimeEpisodeById(id: number, episodeId: number)`

Get specific episode information.

```typescript
const episode = await jikan.anime.getAnimeEpisodeById(1, 1);
console.log({
  title: episode.data.title,
  synopsis: episode.data.synopsis,
  filler: episode.data.filler
});
```

#### Community Content

##### `getAnimeNews(id: number, page?: number)`

Get news articles related to an anime.

```typescript
const news = await jikan.anime.getAnimeNews(1);
news.data.forEach(article => {
  console.log({
    title: article.title,
    author: article.author_username,
    date: article.date,
    excerpt: article.excerpt
  });
});
```

##### `getAnimeReviews(id: number, page?: number)`

Get user reviews for an anime.

```typescript
const reviews = await jikan.anime.getAnimeReviews(1);
reviews.data.forEach(review => {
  console.log({
    reviewer: review.user.username,
    overallScore: review.scores.overall,
    review: review.review.substring(0, 100) + '...',
    episodesWatched: review.episodes_watched
  });
});
```

##### `getAnimeForum(id: number)`

Get forum topics related to an anime.

```typescript
const forum = await jikan.anime.getAnimeForum(1);
forum.data.forEach(topic => {
  console.log({
    title: topic.title,
    author: topic.author_username,
    comments: topic.comments,
    lastComment: topic.last_comment?.date_posted
  });
});
```

#### Media & Content

##### `getAnimeVideos(id: number)`

Get video content (trailers, promotional videos) for an anime.

```typescript
const videos = await jikan.anime.getAnimeVideos(1);
console.log({
  promoVideos: videos.data.promo.length,
  episodes: videos.data.episodes.length,
  musicVideos: videos.data.music_videos.length
});
```

##### `getAnimePictures(id: number)`

Get picture gallery for an anime.

```typescript
const pictures = await jikan.anime.getAnimePictures(1);
pictures.data.forEach(picture => {
  console.log({
    large: picture.large_image_url,
    small: picture.small_image_url
  });
});
```

#### Statistics & Related Content

##### `getAnimeStatistics(id: number)`

Get viewing statistics for an anime.

```typescript
const stats = await jikan.anime.getAnimeStatistics(1);
console.log({
  watching: stats.data.watching,
  completed: stats.data.completed,
  onHold: stats.data.on_hold,
  dropped: stats.data.dropped,
  planToWatch: stats.data.plan_to_watch,
  total: stats.data.total
});
```

##### `getAnimeRecommendations(id: number)`

Get anime recommendations.

```typescript
const recommendations = await jikan.anime.getAnimeRecommendations(1);
recommendations.data.forEach(rec => {
  console.log({
    title: rec.entry.title,
    votes: rec.votes,
    url: rec.entry.url
  });
});
```

##### `getAnimeRelations(id: number)`

Get related anime (sequels, prequels, etc.).

```typescript
const relations = await jikan.anime.getAnimeRelations(1);
relations.data.forEach(relation => {
  console.log({
    relation: relation.relation,
    entries: relation.entry.map(e => ({ name: e.name, type: e.type }))
  });
});
```

#### Additional Information

##### `getAnimeThemes(id: number)`

Get opening and ending themes.

```typescript
const themes = await jikan.anime.getAnimeThemes(1);
console.log({
  openings: themes.data.openings,
  endings: themes.data.endings
});
```

##### `getAnimeExternal(id: number)`

Get external links.

```typescript
const external = await jikan.anime.getAnimeExternal(1);
external.data.forEach(link => {
  console.log({
    name: link.name,
    url: link.url
  });
});
```

##### `getAnimeStreaming(id: number)`

Get streaming platform information.

```typescript
const streaming = await jikan.anime.getAnimeStreaming(1);
streaming.data.forEach(platform => {
  console.log({
    name: platform.name,
    url: platform.url
  });
});
```

##### `getAnimeMoreInfo(id: number)`

Get additional information.

```typescript
const moreInfo = await jikan.anime.getAnimeMoreInfo(1);
console.log(moreInfo.data.moreinfo);
```

##### `getAnimeUserUpdates(id: number, page?: number)`

Get recent user updates.

```typescript
const updates = await jikan.anime.getAnimeUserUpdates(1);
updates.data.forEach(update => {
  console.log({
    user: update.user.username,
    status: update.status,
    episodesSeen: update.episodes_seen,
    score: update.score,
    date: update.date
  });
});
```

### Manga Endpoints

#### Basic Information

##### `getMangaByFullId(id: number)`

Retrieves complete manga information by MyAnimeList ID.

```typescript
const manga = await jikan.manga.getMangaByFullId(1);
console.log({
  title: manga.data.titles[0].title,
  score: manga.data.score,
  chapters: manga.data.chapters,
  volumes: manga.data.volumes,
  status: manga.data.status
});
```

##### `getMangaById(id: number)`

Retrieves basic manga information by MyAnimeList ID.

```typescript
const manga = await jikan.manga.getMangaById(1);
console.log({
  title: manga.data.titles[0].title,
  type: manga.data.type,
  publishing: manga.data.publishing
});
```

##### `searchManga(params?: SearchParams)`

Search for manga with various filters.

```typescript
// Basic search
const results = await jikan.manga.searchManga({ q: 'One Piece' });

// Advanced search with filters
const filteredResults = await jikan.manga.searchManga({
  q: 'Attack on Titan',
  type: 'Manga',
  status: 'Finished',
  min_score: 8.0,
  order_by: 'score',
  sort: 'desc',
  limit: 10
});
```

**Search Parameters:**
- `q?: string` - Search query
- `type?: string` - Manga type (Manga, Light Novel, One-shot, Doujinshi, Manhwa, Manhua, Novel)
- `score?: number` - Score filter
- `min_score?: number` - Minimum score
- `max_score?: number` - Maximum score
- `status?: string` - Publishing status
- `sfw?: boolean` - Safe for work filter
- `genres?: string` - Comma-separated genre IDs
- `order_by?: string` - Field to order by
- `sort?: string` - Sort direction (asc, desc)
- `magazines?: string` - Comma-separated magazine IDs
- `page?: number` - Page number
- `limit?: number` - Results per page

#### Characters & Staff

##### `getMangaCharacters(id: number)`

Get character information for a manga.

```typescript
const characters = await jikan.manga.getMangaCharacters(1);
characters.data.forEach(char => {
  console.log({
    name: char.character.name,
    role: char.role
  });
});
```

#### Community Content

##### `getMangaNews(id: number, page?: number)`

Get news articles related to a manga.

```typescript
const news = await jikan.manga.getMangaNews(1);
news.data.forEach(article => {
  console.log({
    title: article.title,
    author: article.author_username,
    date: article.date,
    excerpt: article.excerpt
  });
});
```

##### `getMangaReviews(id: number, page?: number, preliminary?: boolean, spoilers?: boolean)`

Get user reviews for a manga.

```typescript
const reviews = await jikan.manga.getMangaReviews(1);
reviews.data.forEach(review => {
  console.log({
    reviewer: review.user.username,
    overallScore: review.scores.overall,
    review: review.review.substring(0, 100) + '...',
    chaptersRead: review.chapters_read
  });
});

// Get reviews with filters
const filteredReviews = await jikan.manga.getMangaReviews(1, 1, true, false);
```

##### `getMangaForum(id: number)`

Get forum topics related to a manga.

```typescript
const forum = await jikan.manga.getMangaForum(1);
forum.data.forEach(topic => {
  console.log({
    title: topic.title,
    author: topic.author_username,
    comments: topic.comments,
    lastComment: topic.last_comment?.date_posted
  });
});
```

#### Media & Content

##### `getMangaPictures(id: number)`

Get picture gallery for a manga.

```typescript
const pictures = await jikan.manga.getMangaPictures(1);
pictures.data.forEach(picture => {
  console.log({
    large: picture.large_image_url,
    small: picture.small_image_url
  });
});
```

#### Statistics & Related Content

##### `getMangaStatistics(id: number)`

Get reading statistics for a manga.

```typescript
const stats = await jikan.manga.getMangaStatistics(1);
console.log({
  reading: stats.data.reading,
  completed: stats.data.completed,
  onHold: stats.data.on_hold,
  dropped: stats.data.dropped,
  planToRead: stats.data.plan_to_read,
  total: stats.data.total
});
```

##### `getMangaRecommendations(id: number)`

Get manga recommendations.

```typescript
const recommendations = await jikan.manga.getMangaRecommendations(1);
recommendations.data.forEach(rec => {
  console.log({
    title: rec.entry.title,
    votes: rec.votes,
    url: rec.entry.url
  });
});
```

##### `getMangaRelations(id: number)`

Get related manga/anime (sequels, prequels, etc.).

```typescript
const relations = await jikan.manga.getMangaRelations(1);
relations.data.forEach(relation => {
  console.log({
    relation: relation.relation,
    entries: relation.entry.map(e => ({ name: e.name, type: e.type }))
  });
});
```

#### Additional Information

##### `getMangaExternal(id: number)`

Get external links.

```typescript
const external = await jikan.manga.getMangaExternal(1);
external.data.forEach(link => {
  console.log({
    name: link.name,
    url: link.url
  });
});
```

##### `getMangaMoreInfo(id: number)`

Get additional information.

```typescript
const moreInfo = await jikan.manga.getMangaMoreInfo(1);
console.log(moreInfo.data.moreinfo);
```

##### `getMangaUserUpdates(id: number, page?: number)`

Get recent user updates.

```typescript
const updates = await jikan.manga.getMangaUserUpdates(1);
updates.data.forEach(update => {
  console.log({
    user: update.user.username,
    status: update.status,
    chaptersRead: update.chapters_read,
    volumesRead: update.volumes_read,
    score: update.score,
    date: update.date
  });
});
```

### Characters Endpoints

#### Basic Information

##### `getCharacterByFullId(id: number)`

Retrieves complete character information by MyAnimeList ID.

```typescript
const character = await jikan.characters.getCharacterByFullId(1);
console.log({
  name: character.data.name,
  nameKanji: character.data.name_kanji,
  nicknames: character.data.nicknames,
  favorites: character.data.favorites,
  about: character.data.about
});
```

##### `getCharacterById(id: number)`

Retrieves basic character information by MyAnimeList ID.

```typescript
const character = await jikan.characters.getCharacterById(1);
console.log({
  name: character.data.name,
  favorites: character.data.favorites,
  url: character.data.url
});
```

#### Appearances & Media

##### `getCharacterAnime(id: number)`

Get anime appearances for a character.

```typescript
const animeAppearances = await jikan.characters.getCharacterAnime(1);
animeAppearances.data.forEach(appearance => {
  console.log({
    title: appearance.anime.title,
    role: appearance.role,
    url: appearance.anime.url
  });
});
```

##### `getCharacterManga(id: number)`

Get manga appearances for a character.

```typescript
const mangaAppearances = await jikan.characters.getCharacterManga(1);
mangaAppearances.data.forEach(appearance => {
  console.log({
    title: appearance.manga.title,
    role: appearance.role,
    url: appearance.manga.url
  });
});
```

##### `getCharacterVoices(id: number)`

Get voice actor information for a character.

```typescript
const voices = await jikan.characters.getCharacterVoices(1);
voices.data.forEach(voice => {
  console.log({
    voiceActor: voice.person.name,
    language: voice.language,
    url: voice.person.url
  });
});
```

##### `getCharacterPictures(id: number)`

Get picture gallery for a character.

```typescript
const pictures = await jikan.characters.getCharacterPictures(1);
pictures.data.forEach(picture => {
  console.log({
    large: picture.large_image_url,
    small: picture.small_image_url
  });
});
```

## Error Handling

The library throws errors for failed API requests:

```typescript
try {
  const anime = await jikan.anime.getAnimeByFullId(999999);
} catch (error) {
  console.error('API Error:', error.message);
  // Handle the error appropriately
}
```

## TypeScript Support

This library is written in TypeScript and provides comprehensive type definitions:

```typescript
import Jikan, { AnimeResponse, MangaResponse, CharacterResponse, JikanResponse } from 'jikan-api.js';

const jikan = new Jikan();

// Full type safety for anime
const anime: JikanResponse<AnimeResponse> = await jikan.anime.getAnimeByFullId(1);

// Full type safety for manga
const manga: JikanResponse<MangaResponse> = await jikan.manga.getMangaByFullId(1);

// Full type safety for characters
const character: JikanResponse<CharacterResponse> = await jikan.characters.getCharacterByFullId(1);

// TypeScript will provide autocomplete and type checking
console.log(anime.data.titles[0].title);
console.log(anime.data.score);
console.log(anime.data.episodes);

console.log(manga.data.titles[0].title);
console.log(manga.data.score);
console.log(manga.data.chapters);

console.log(character.data.name);
console.log(character.data.nicknames);
console.log(character.data.favorites);
```

## Pagination

Many endpoints support pagination:

```typescript
// Check if more pages are available
const episodes = await jikan.anime.getAnimeEpisodes(1);
if (episodes.pagination?.has_next_page) {
  const nextPage = await jikan.anime.getAnimeEpisodes(1, 2);
}

// Get pagination info
console.log({
  currentPage: episodes.pagination?.current_page,
  lastPage: episodes.pagination?.last_visible_page,
  itemsPerPage: episodes.pagination?.items.per_page,
  totalItems: episodes.pagination?.items.total
});
```

## Rate Limiting

The Jikan API has rate limits. It's recommended to:

1. Add delays between requests if making many calls
2. Implement retry logic for failed requests
3. Cache responses when possible

```typescript
// Example with delay
async function getMultipleAnime(ids: number[]) {
  const results = [];
  for (const id of ids) {
    const anime = await jikan.anime.getAnimeByFullId(id);
    results.push(anime);
    
    // Add delay to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return results;
}
```

## Examples

### Get Top Anime

```typescript
const topAnime = await jikan.anime.searchAnime({
  order_by: 'score',
  sort: 'desc',
  limit: 10
});

console.log('Top 10 Anime:');
topAnime.data.forEach((anime, index) => {
  console.log(`${index + 1}. ${anime.titles[0].title} (Score: ${anime.score})`);
});
```

### Find Anime by Genre

```typescript
// Get action anime (genre ID 1)
const actionAnime = await jikan.anime.searchAnime({
  genres: '1',
  order_by: 'popularity',
  sort: 'asc',
  limit: 5
});

console.log('Popular Action Anime:');
actionAnime.data.forEach(anime => {
  console.log(`${anime.titles[0].title} - Episodes: ${anime.episodes}`);
});
```

### Get Anime with Full Details

```typescript
async function getAnimeDetails(id: number) {
  // Get all information about an anime
  const [
    anime,
    characters,
    staff,
    episodes,
    reviews,
    stats
  ] = await Promise.all([
    jikan.anime.getAnimeByFullId(id),
    jikan.anime.getAnimeCharacters(id),
    jikan.anime.getAnimeStaff(id),
    jikan.anime.getAnimeEpisodes(id),
    jikan.anime.getAnimeReviews(id),
    jikan.anime.getAnimeStatistics(id)
  ]);

  return {
    basic: anime.data,
    characters: characters.data,
    staff: staff.data,
    episodes: episodes.data,
    reviews: reviews.data,
    statistics: stats.data
  };
}

// Usage
const fullDetails = await getAnimeDetails(1);
console.log('Full anime details:', fullDetails);
```

### Get Top Manga

```typescript
const topManga = await jikan.manga.searchManga({
  order_by: 'score',
  sort: 'desc',
  limit: 10
});

console.log('Top 10 Manga:');
topManga.data.forEach((manga, index) => {
  console.log(`${index + 1}. ${manga.titles[0].title} (Score: ${manga.score})`);
});
```

### Find Manga by Genre

```typescript
// Get romance manga (genre ID 22)
const romanceManga = await jikan.manga.searchManga({
  genres: '22',
  order_by: 'popularity',
  sort: 'asc',
  limit: 5
});

console.log('Popular Romance Manga:');
romanceManga.data.forEach(manga => {
  console.log(`${manga.titles[0].title} - Chapters: ${manga.chapters || 'Ongoing'}`);
});
```

### Get Manga with Full Details

```typescript
async function getMangaDetails(id: number) {
  // Get all information about a manga
  const [
    manga,
    characters,
    news,
    reviews,
    stats,
    recommendations
  ] = await Promise.all([
    jikan.manga.getMangaByFullId(id),
    jikan.manga.getMangaCharacters(id),
    jikan.manga.getMangaNews(id),
    jikan.manga.getMangaReviews(id),
    jikan.manga.getMangaStatistics(id),
    jikan.manga.getMangaRecommendations(id)
  ]);

  return {
    basic: manga.data,
    characters: characters.data,
    news: news.data,
    reviews: reviews.data,
    statistics: stats.data,
    recommendations: recommendations.data
  };
}

// Usage
const fullMangaDetails = await getMangaDetails(1);
console.log('Full manga details:', fullMangaDetails);
```

### Compare Anime and Manga

```typescript
async function compareAnimeAndManga(animeId: number, mangaId: number) {
  const [anime, manga] = await Promise.all([
    jikan.anime.getAnimeByFullId(animeId),
    jikan.manga.getMangaByFullId(mangaId)
  ]);

  console.log('Comparison:');
  console.log(`Anime: ${anime.data.titles[0].title} - Score: ${anime.data.score}`);
  console.log(`Manga: ${manga.data.titles[0].title} - Score: ${manga.data.score}`);
  
  return {
    anime: anime.data,
    manga: manga.data,
    animeScore: anime.data.score,
    mangaScore: manga.data.score
  };
}

// Usage
const comparison = await compareAnimeAndManga(1, 1);
```

### Get Character Details with Appearances

```typescript
async function getCharacterDetails(id: number) {
  // Get all information about a character
  const [
    character,
    animeAppearances,
    mangaAppearances,
    voices,
    pictures
  ] = await Promise.all([
    jikan.characters.getCharacterByFullId(id),
    jikan.characters.getCharacterAnime(id),
    jikan.characters.getCharacterManga(id),
    jikan.characters.getCharacterVoices(id),
    jikan.characters.getCharacterPictures(id)
  ]);

  return {
    basic: character.data,
    animeAppearances: animeAppearances.data,
    mangaAppearances: mangaAppearances.data,
    voiceActors: voices.data,
    pictures: pictures.data
  };
}

// Usage
const characterDetails = await getCharacterDetails(1);
console.log('Character details:', characterDetails);
```

### Find Character Voice Actors

```typescript
async function getCharacterVoiceActors(characterId: number) {
  const voices = await jikan.characters.getCharacterVoices(characterId);
  
  const voiceActorsByLanguage = voices.data.reduce((acc, voice) => {
    if (!acc[voice.language]) {
      acc[voice.language] = [];
    }
    acc[voice.language].push({
      name: voice.person.name,
      url: voice.person.url
    });
    return acc;
  }, {} as Record<string, Array<{name: string, url: string}>>);

  return voiceActorsByLanguage;
}

// Usage
const voiceActors = await getCharacterVoiceActors(1);
console.log('Japanese VAs:', voiceActors.Japanese);
console.log('English VAs:', voiceActors.English);
```

### Character Appearance Analysis

```typescript
async function analyzeCharacterAppearances(characterId: number) {
  const [animeAppearances, mangaAppearances] = await Promise.all([
    jikan.characters.getCharacterAnime(characterId),
    jikan.characters.getCharacterManga(characterId)
  ]);

  const stats = {
    totalAnime: animeAppearances.data.length,
    totalManga: mangaAppearances.data.length,
    mainRoles: {
      anime: animeAppearances.data.filter(a => a.role === 'Main').length,
      manga: mangaAppearances.data.filter(m => m.role === 'Main').length
    },
    supportingRoles: {
      anime: animeAppearances.data.filter(a => a.role === 'Supporting').length,
      manga: mangaAppearances.data.filter(m => m.role === 'Supporting').length
    }
  };

  return {
    stats,
    animeList: animeAppearances.data.map(a => ({ title: a.anime.title, role: a.role })),
    mangaList: mangaAppearances.data.map(m => ({ title: m.manga.title, role: m.role }))
  };
}

// Usage
const analysis = await analyzeCharacterAppearances(1);
console.log('Character appeared in', analysis.stats.totalAnime, 'anime and', analysis.stats.totalManga, 'manga');
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

```bash
# Clone the repository
git clone https://github.com/OpenianDevelopment/jikan-api.js.git
cd jikan-api.js

# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build

# Run tests in watch mode
npm run test:watch

# Build in watch mode
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Jikan API](https://jikan.moe/) - The unofficial MyAnimeList API
- [MyAnimeList](https://myanimelist.net/) - The anime and manga database

## Related Projects

- [Jikan REST API](https://github.com/jikan-me/jikan-rest) - The official Jikan API
- [Jikan Documentation](https://docs.api.jikan.moe/) - Official API documentation

---

Made with ❤️ by [Rohan Kumar](https://github.com/OpenianDevelopment)