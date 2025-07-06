/**
 * @fileoverview Test suite for the Anime endpoint class
 * Tests all methods of the Anime class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { Anime } from '../endpoints/anime';
import JikanHttpClient from '../client/http-client';
import { 
    AnimeResponse,
    AnimeCharacterResponse,
    AnimeStaffResponse,
    AnimeEpisodeResponse,
    AnimeNewsResponse,
    AnimeForumResponse,
    AnimeVideoResponse,
    AnimePictureResponse,
    AnimeStatisticsResponse,
    AnimeRecommendationResponse,
    AnimeUserUpdateResponse,
    AnimeReviewResponse,
    AnimeRelationResponse,
    AnimeThemeResponse,
    AnimeExternalResponse,
    AnimeStreamingResponse
} from '../types/anime';
import JikanResponse from '../types/common';

// Mock the HTTP client to avoid actual network calls in tests
jest.mock('../client/http-client');

describe('Anime Class', () => {
    let animeClient: Anime;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    // Set up fresh instances before each test
    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        animeClient = new Anime(mockHttpClient);
    });

    // Clean up mocks after each test to prevent test interference
    afterEach(() => {
        jest.clearAllMocks();
    });

    // Test basic anime information retrieval
    describe('getAnimeByFullId', () => {
        it('should fetch anime by ID', async () => {
            // Mock response with minimal required fields for AnimeResponse
            const mockResponse: JikanResponse<AnimeResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/anime/1',
                    images: {
                        jpg: { image_url: 'test.jpg' },
                        webp: { image_url: 'test.webp' }
                    },
                    trailer: { youtube_id: 'test' },
                    approved: true,
                    titles: [{ type: 'Default', title: 'Test Anime' }],
                    airing: false,
                    aired: {
                        prop: {
                            from: { year: 2020 },
                            to: { year: 2020 }
                        }
                    },
                    broadcast: {},
                    producers: [],
                    licensors: [],
                    studios: [],
                    genres: [],
                    explicit_genres: [],
                    themes: [],
                    demographics: [],
                    relations: [],
                    theme: { openings: [], endings: [] },
                    external: [],
                    streaming: []
                }
            };

            // Configure mock to return our test data
            mockHttpClient.get.mockResolvedValue(mockResponse);

            // Execute the method under test
            const result = await animeClient.getAnimeByFullId(1);

            // Verify the correct endpoint was called and result is as expected
            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeCharacters', () => {
        it('should fetch anime characters', async () => {
            const mockResponse: JikanResponse<AnimeCharacterResponse[]> = {
                data: [{
                    character: {
                        mal_id: 1,
                        url: 'test-url',
                        images: {
                            jpg: { image_url: 'test.jpg' },
                            webp: { image_url: 'test.webp' }
                        },
                        name: 'Test Character'
                    },
                    role: 'Main',
                    voice_actors: []
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeCharacters(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/characters');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeStaff', () => {
        it('should fetch anime staff', async () => {
            const mockResponse: JikanResponse<AnimeStaffResponse[]> = {
                data: [{
                    person: {
                        mal_id: 1,
                        url: 'test-url',
                        images: {
                            jpg: { image_url: 'test.jpg' }
                        },
                        name: 'Test Staff'
                    },
                    positions: ['Director']
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeStaff(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/staff');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeEpisodes', () => {
        it('should fetch anime episodes without page', async () => {
            const mockResponse: JikanResponse<AnimeEpisodeResponse[]> = {
                data: [{
                    mal_id: 1,
                    title: 'Episode 1',
                    filler: false,
                    recap: false
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeEpisodes(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/episodes');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch anime episodes with page', async () => {
            const mockResponse: JikanResponse<AnimeEpisodeResponse[]> = {
                data: [{
                    mal_id: 1,
                    title: 'Episode 1',
                    filler: false,
                    recap: false
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeEpisodes(1, 2);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/episodes?page=2');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeEpisodeById', () => {
        it('should fetch specific anime episode', async () => {
            const mockResponse: JikanResponse<AnimeEpisodeResponse> = {
                data: {
                    mal_id: 1,
                    title: 'Episode 1',
                    filler: false,
                    recap: false
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeEpisodeById(1, 1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/episodes/1');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeNews', () => {
        it('should fetch anime news without page', async () => {
            const mockResponse: JikanResponse<AnimeNewsResponse[]> = {
                data: [{
                    mal_id: 1,
                    url: 'test-url',
                    title: 'Test News',
                    date: '2024-01-01',
                    author_username: 'test-author',
                    author_url: 'test-author-url',
                    forum_url: 'test-forum-url',
                    images: {
                        jpg: { image_url: 'test.jpg' }
                    },
                    comments: 0,
                    excerpt: 'Test excerpt'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeNews(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/news');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch anime news with page', async () => {
            const mockResponse: JikanResponse<AnimeNewsResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeNews(1, 2);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/news?page=2');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeForum', () => {
        it('should fetch anime forum topics', async () => {
            const mockResponse: JikanResponse<AnimeForumResponse[]> = {
                data: [{
                    mal_id: 1,
                    url: 'test-url',
                    title: 'Test Forum Topic',
                    date_posted: '2024-01-01',
                    author_username: 'test-author',
                    author_url: 'test-author-url',
                    comments: 5,
                    last_comment: {
                        url: 'test-last-comment-url',
                        author_username: 'test-last-author',
                        author_url: 'test-last-author-url',
                        date_posted: '2024-01-02'
                    }
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeForum(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/forum');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeVideos', () => {
        it('should fetch anime videos', async () => {
            const mockResponse: JikanResponse<AnimeVideoResponse> = {
                data: {
                    promo: [],
                    episodes: [],
                    music_videos: []
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeVideos(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/videos');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimePictures', () => {
        it('should fetch anime pictures', async () => {
            const mockResponse: JikanResponse<AnimePictureResponse[]> = {
                data: [{
                    large_image_url: 'large.jpg',
                    small_image_url: 'small.jpg'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimePictures(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/pictures');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeStatistics', () => {
        it('should fetch anime statistics', async () => {
            const mockResponse: JikanResponse<AnimeStatisticsResponse> = {
                data: {
                    watching: 100,
                    completed: 1000,
                    on_hold: 50,
                    dropped: 25,
                    plan_to_watch: 200,
                    total: 1375,
                    scores: {
                        '1': { votes: 5, percentage: 0.4 },
                        '10': { votes: 500, percentage: 36.4 }
                    }
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeStatistics(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/statistics');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeMoreInfo', () => {
        it('should fetch anime more info', async () => {
            const mockResponse: JikanResponse<{ moreinfo: string }> = {
                data: {
                    moreinfo: 'Additional information about the anime'
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeMoreInfo(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/moreinfo');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeRecommendations', () => {
        it('should fetch anime recommendations', async () => {
            const mockResponse: JikanResponse<AnimeRecommendationResponse[]> = {
                data: [{
                    entry: {
                        mal_id: 2,
                        url: 'test-url',
                        images: {
                            jpg: { image_url: 'test.jpg' },
                            webp: { image_url: 'test.webp' }
                        },
                        title: 'Recommended Anime'
                    },
                    url: 'recommendation-url',
                    votes: 42
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeRecommendations(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/recommendations');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeUserUpdates', () => {
        it('should fetch anime user updates', async () => {
            const mockResponse: JikanResponse<AnimeUserUpdateResponse[]> = {
                data: [{
                    user: {
                        username: 'test-user',
                        url: 'test-user-url',
                        images: {
                            jpg: { image_url: 'test.jpg' },
                            webp: { image_url: 'test.webp' }
                        }
                    },
                    score: 8,
                    status: 'Completed',
                    episodes_seen: 12,
                    episodes_total: 12,
                    date: '2024-01-01'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeUserUpdates(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/userupdates');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeReviews', () => {
        it('should fetch anime reviews', async () => {
            const mockResponse: JikanResponse<AnimeReviewResponse[]> = {
                data: [{
                    mal_id: 1,
                    url: 'test-review-url',
                    type: 'anime',
                    votes: 10,
                    date: '2024-01-01',
                    review: 'Great anime!',
                    episodes_watched: 12,
                    scores: {
                        overall: 8,
                        story: 9,
                        animation: 8,
                        sound: 7,
                        character: 8,
                        enjoyment: 9
                    },
                    user: {
                        username: 'test-reviewer',
                        url: 'test-reviewer-url',
                        images: {
                            jpg: { image_url: 'test.jpg' },
                            webp: { image_url: 'test.webp' }
                        }
                    }
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeReviews(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/reviews');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeRelations', () => {
        it('should fetch anime relations', async () => {
            const mockResponse: JikanResponse<AnimeRelationResponse[]> = {
                data: [{
                    relation: 'Sequel',
                    entry: [{
                        mal_id: 2,
                        type: 'anime',
                        name: 'Related Anime',
                        url: 'test-url'
                    }]
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeRelations(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/relations');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeThemes', () => {
        it('should fetch anime themes', async () => {
            const mockResponse: JikanResponse<AnimeThemeResponse> = {
                data: {
                    openings: ['Opening 1', 'Opening 2'],
                    endings: ['Ending 1', 'Ending 2']
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeThemes(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/themes');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeExternal', () => {
        it('should fetch anime external links', async () => {
            const mockResponse: JikanResponse<AnimeExternalResponse[]> = {
                data: [{
                    name: 'Official Website',
                    url: 'https://example.com'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeExternal(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/external');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getAnimeStreaming', () => {
        it('should fetch anime streaming platforms', async () => {
            const mockResponse: JikanResponse<AnimeStreamingResponse[]> = {
                data: [{
                    name: 'Crunchyroll',
                    url: 'https://crunchyroll.com'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.getAnimeStreaming(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime/1/streaming');
            expect(result).toEqual(mockResponse);
        });
    });

    // Test anime search functionality with various parameter combinations
    describe('searchAnime', () => {
        it('should search anime without parameters', async () => {
            const mockResponse: JikanResponse<AnimeResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await animeClient.searchAnime();

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime');
            expect(result).toEqual(mockResponse);
        });

        it('should search anime with parameters', async () => {
            const mockResponse: JikanResponse<AnimeResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const searchParams = {
                q: 'Naruto',
                type: 'TV',
                score: 8,
                status: 'Completed',
                sfw: true,
                page: 1,
                limit: 25
            };

            const result = await animeClient.searchAnime(searchParams);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime?q=Naruto&type=TV&score=8&status=Completed&sfw=true&page=1&limit=25');
            expect(result).toEqual(mockResponse);
        });

        it('should search anime with undefined parameters filtered out', async () => {
            const mockResponse: JikanResponse<AnimeResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const searchParams = {
                q: 'Naruto',
                score: 8,
            };

            const result = await animeClient.searchAnime(searchParams);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/anime?q=Naruto&score=8');
            expect(result).toEqual(mockResponse);
        });
    });

    // Test error handling scenarios
    describe('Error handling', () => {
        it('should handle HTTP client errors', async () => {
            // Mock HTTP client to throw an error
            const error = new Error('Network error');
            mockHttpClient.get.mockRejectedValue(error);

            // Verify that the error is properly propagated
            await expect(animeClient.getAnimeByFullId(1)).rejects.toThrow('Network error');
        });
    });
});