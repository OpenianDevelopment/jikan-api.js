/**
 * @fileoverview Test suite for the Random endpoint class
 * Tests all methods of the Random class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { Random } from '../endpoints/random';
import JikanHttpClient from '../client/http-client';
import { 
    RandomAnimeResponse,
    RandomMangaResponse,
    RandomCharacterResponse,
    RandomPersonResponse,
    RandomUserResponse
} from '../types/random';
import JikanResponse from '../types/common';

jest.mock('../client/http-client');

describe('Random Class', () => {
    let randomClient: Random;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        randomClient = new Random(mockHttpClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getRandomAnime', () => {
        it('should fetch random anime', async () => {
            const mockResponse: JikanResponse<RandomAnimeResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/anime/1',
                    images: {
                        jpg: {
                            image_url: 'https://example.com/anime1.jpg',
                            small_image_url: 'https://example.com/anime1_small.jpg',
                            large_image_url: 'https://example.com/anime1_large.jpg'
                        },
                        webp: {
                            image_url: 'https://example.com/anime1.webp',
                            small_image_url: 'https://example.com/anime1_small.webp',
                            large_image_url: 'https://example.com/anime1_large.webp'
                        }
                    },
                    trailer: {
                        youtube_id: 'abc123',
                        url: 'https://youtube.com/watch?v=abc123',
                        embed_url: 'https://youtube.com/embed/abc123',
                        images: {
                            image_url: 'https://example.com/trailer.jpg',
                            small_image_url: 'https://example.com/trailer_small.jpg',
                            medium_image_url: 'https://example.com/trailer_medium.jpg',
                            large_image_url: 'https://example.com/trailer_large.jpg',
                            maximum_image_url: 'https://example.com/trailer_max.jpg'
                        }
                    },
                    approved: true,
                    titles: [{ type: 'Default', title: 'Cowboy Bebop' }],
                    title: 'Cowboy Bebop',
                    title_english: 'Cowboy Bebop',
                    title_japanese: 'カウボーイビバップ',
                    title_synonyms: [],
                    type: 'TV',
                    source: 'Original',
                    episodes: 26,
                    status: 'Finished Airing',
                    airing: false,
                    aired: {
                        from: '1998-04-03T00:00:00+00:00',
                        to: '1999-04-24T00:00:00+00:00',
                        prop: {
                            from: { day: 3, month: 4, year: 1998 },
                            to: { day: 24, month: 4, year: 1999 }
                        },
                        string: 'Apr 3, 1998 to Apr 24, 1999'
                    },
                    duration: '24 min per ep',
                    rating: 'R - 17+ (violence & profanity)',
                    score: 8.78,
                    scored_by: 750000,
                    rank: 28,
                    popularity: 43,
                    members: 1500000,
                    favorites: 65000,
                    synopsis: 'In the year 2071...',
                    background: 'Cowboy Bebop was created by...',
                    season: 'spring',
                    year: 1998,
                    broadcast: {
                        day: 'Saturdays',
                        time: '01:00',
                        timezone: 'Asia/Tokyo',
                        string: 'Saturdays at 01:00 (JST)'
                    },
                    producers: [],
                    licensors: [],
                    studios: [],
                    genres: [],
                    explicit_genres: [],
                    themes: [],
                    demographics: []
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await randomClient.getRandomAnime();

            expect(mockHttpClient.get).toHaveBeenCalledWith('random/anime');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getRandomManga', () => {
        it('should fetch random manga', async () => {
            const mockResponse: JikanResponse<RandomMangaResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/manga/1',
                    images: {
                        jpg: {
                            image_url: 'https://example.com/manga1.jpg',
                            small_image_url: 'https://example.com/manga1_small.jpg',
                            large_image_url: 'https://example.com/manga1_large.jpg'
                        },
                        webp: {
                            image_url: 'https://example.com/manga1.webp',
                            small_image_url: 'https://example.com/manga1_small.webp',
                            large_image_url: 'https://example.com/manga1_large.webp'
                        }
                    },
                    approved: true,
                    titles: [{ type: 'Default', title: 'Monster' }],
                    title: 'Monster',
                    title_english: 'Monster',
                    title_japanese: 'モンスター',
                    title_synonyms: [],
                    type: 'Manga',
                    chapters: 162,
                    volumes: 18,
                    status: 'Finished',
                    publishing: false,
                    published: {
                        from: '1994-12-05T00:00:00+00:00',
                        to: '2001-12-20T00:00:00+00:00',
                        prop: {
                            from: { day: 5, month: 12, year: 1994 },
                            to: { day: 20, month: 12, year: 2001 }
                        },
                        string: 'Dec 5, 1994 to Dec 20, 2001'
                    },
                    score: 9.13,
                    scored_by: 85000,
                    rank: 1,
                    popularity: 44,
                    members: 200000,
                    favorites: 25000,
                    synopsis: 'Dr. Kenzo Tenma...',
                    background: 'Monster won...',
                    authors: [],
                    serializations: [],
                    genres: [],
                    explicit_genres: [],
                    themes: [],
                    demographics: []
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await randomClient.getRandomManga();

            expect(mockHttpClient.get).toHaveBeenCalledWith('random/manga');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getRandomCharacter', () => {
        it('should fetch random character', async () => {
            const mockResponse: JikanResponse<RandomCharacterResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/character/1',
                    images: {
                        jpg: {
                            image_url: 'https://example.com/character1.jpg',
                            small_image_url: 'https://example.com/character1_small.jpg'
                        },
                        webp: {
                            image_url: 'https://example.com/character1.webp',
                            small_image_url: 'https://example.com/character1_small.webp'
                        }
                    },
                    name: 'Spike Spiegel',
                    name_kanji: 'スパイク・スピーゲル',
                    nicknames: ['Spike'],
                    favorites: 15000,
                    about: 'Spike Spiegel is a bounty hunter...'
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await randomClient.getRandomCharacter();

            expect(mockHttpClient.get).toHaveBeenCalledWith('random/characters');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getRandomPerson', () => {
        it('should fetch random person', async () => {
            const mockResponse: JikanResponse<RandomPersonResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/people/1',
                    name: 'Hayao Miyazaki',
                    given_name: 'Hayao',
                    family_name: 'Miyazaki',
                    alternate_names: ['宮崎 駿'],
                    birthday: '1941-01-05T00:00:00+00:00',
                    favorites: 12345,
                    about: 'Famous Japanese animator and director',
                    images: {
                        jpg: {
                            image_url: 'https://example.com/person1.jpg'
                        }
                    }
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await randomClient.getRandomPerson();

            expect(mockHttpClient.get).toHaveBeenCalledWith('random/people');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getRandomUser', () => {
        it('should fetch random user', async () => {
            const mockResponse: JikanResponse<RandomUserResponse> = {
                data: {
                    mal_id: 1,
                    username: 'testuser',
                    url: 'https://myanimelist.net/profile/testuser',
                    images: {
                        jpg: { image_url: 'https://example.com/user1.jpg' },
                        webp: { image_url: 'https://example.com/user1.webp' }
                    },
                    last_online: '2023-01-01T00:00:00+00:00',
                    joined: '2020-01-01T00:00:00+00:00'
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await randomClient.getRandomUser();

            expect(mockHttpClient.get).toHaveBeenCalledWith('random/users');
            expect(result).toEqual(mockResponse);
        });
    });
});