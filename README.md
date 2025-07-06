# Jikan API.js

A modern TypeScript wrapper for the [Jikan API](https://jikan.moe/) - the unofficial MyAnimeList API.

[![npm version](https://badge.fury.io/js/jikan-api.js.svg)](https://badge.fury.io/js/jikan-api.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

## Features

- 🎯 **Full TypeScript support** with comprehensive type definitions
- 🚀 **Modern ES modules** - Tree-shakable and lightweight
- 📚 **Complete API coverage** - All Jikan v4 anime endpoints
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

// Search for anime
const searchResults = await jikan.anime.searchAnime({ 
  q: 'Naruto', 
  type: 'TV' 
});
console.log(searchResults.data[0].titles[0].title);
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
import Jikan, { AnimeResponse, JikanResponse } from 'jikan-api.js';

const jikan = new Jikan();

// Full type safety
const anime: JikanResponse<AnimeResponse> = await jikan.anime.getAnimeByFullId(1);

// TypeScript will provide autocomplete and type checking
console.log(anime.data.titles[0].title);
console.log(anime.data.score);
console.log(anime.data.episodes);
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