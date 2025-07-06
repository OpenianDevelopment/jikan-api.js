/**
 * @fileoverview Test suite for the Manga endpoint class
 * Tests all methods of the Manga class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { Manga } from '../endpoints/manga';
import JikanHttpClient from '../client/http-client';
import { 
    MangaResponse,
    MangaCharacterResponse,
    MangaNewsResponse,
    MangaForumResponse,
    MangaPictureResponse,
    MangaStatisticsResponse,
    MangaRecommendationResponse,
    MangaUserUpdateResponse,
    MangaReviewResponse,
    MangaRelationResponse,
    MangaExternalResponse
} from '../types/manga';
import JikanResponse from '../types/common';

// Mock the HTTP client to avoid actual network calls in tests
jest.mock('../client/http-client');

describe('Manga Class', () => {
    let mangaClient: Manga;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    // Set up fresh instances before each test
    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        mangaClient = new Manga(mockHttpClient);
    });

    // Clean up mocks after each test to prevent test interference
    afterEach(() => {
        jest.clearAllMocks();
    });

    // Test basic manga information retrieval
    describe('getMangaByFullId', () => {
        it('should fetch full manga by ID', async () => {
            // Mock response with minimal required fields for MangaResponse
            const mockResponse: JikanResponse<MangaResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/manga/1',
                    images: {
                        jpg: { image_url: 'test.jpg' },
                        webp: { image_url: 'test.webp' }
                    },
                    approved: true,
                    titles: [{ type: 'Default', title: 'Test Manga' }],
                    publishing: false,
                    published: {
                        prop: {
                            from: { year: 2020 },
                            to: { year: 2020 }
                        }
                    },
                    authors: [],
                    serializations: [],
                    genres: [],
                    explicit_genres: [],
                    themes: [],
                    demographics: [],
                    relations: [],
                    external: []
                }
            };

            // Configure mock to return our test data
            mockHttpClient.get.mockResolvedValue(mockResponse);

            // Execute the method under test
            const result = await mangaClient.getMangaByFullId(1);

            // Verify the correct endpoint was called and result is as expected
            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/full');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaById', () => {
        it('should fetch basic manga by ID', async () => {
            const mockResponse: JikanResponse<MangaResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/manga/1',
                    images: {
                        jpg: { image_url: 'test.jpg' },
                        webp: { image_url: 'test.webp' }
                    },
                    approved: true,
                    titles: [{ type: 'Default', title: 'Test Manga' }],
                    publishing: false,
                    published: {
                        prop: {
                            from: { year: 2020 },
                            to: { year: 2020 }
                        }
                    },
                    authors: [],
                    serializations: [],
                    genres: [],
                    explicit_genres: [],
                    themes: [],
                    demographics: [],
                    relations: [],
                    external: []
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaById(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaCharacters', () => {
        it('should fetch manga characters', async () => {
            const mockResponse: JikanResponse<MangaCharacterResponse[]> = {
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
                    role: 'Main'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaCharacters(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/characters');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaNews', () => {
        it('should fetch manga news without page', async () => {
            const mockResponse: JikanResponse<MangaNewsResponse[]> = {
                data: [{
                    mal_id: 1,
                    url: 'test-url',
                    title: 'Test Manga News',
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

            const result = await mangaClient.getMangaNews(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/news');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch manga news with page', async () => {
            const mockResponse: JikanResponse<MangaNewsResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaNews(1, 2);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/news?page=2');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaForum', () => {
        it('should fetch manga forum topics', async () => {
            const mockResponse: JikanResponse<MangaForumResponse[]> = {
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

            const result = await mangaClient.getMangaForum(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/forum');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaPictures', () => {
        it('should fetch manga pictures', async () => {
            const mockResponse: JikanResponse<MangaPictureResponse[]> = {
                data: [{
                    large_image_url: 'large.jpg',
                    small_image_url: 'small.jpg'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaPictures(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/pictures');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaStatistics', () => {
        it('should fetch manga statistics', async () => {
            const mockResponse: JikanResponse<MangaStatisticsResponse> = {
                data: {
                    reading: 100,
                    completed: 1000,
                    on_hold: 50,
                    dropped: 25,
                    plan_to_read: 200,
                    total: 1375,
                    scores: {
                        '1': { votes: 5, percentage: 0.4 },
                        '10': { votes: 500, percentage: 36.4 }
                    }
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaStatistics(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/statistics');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaMoreInfo', () => {
        it('should fetch manga more info', async () => {
            const mockResponse: JikanResponse<{ moreinfo: string }> = {
                data: {
                    moreinfo: 'Additional information about the manga'
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaMoreInfo(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/moreinfo');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaRecommendations', () => {
        it('should fetch manga recommendations', async () => {
            const mockResponse: JikanResponse<MangaRecommendationResponse[]> = {
                data: [{
                    entry: {
                        mal_id: 2,
                        url: 'test-url',
                        images: {
                            jpg: { image_url: 'test.jpg' },
                            webp: { image_url: 'test.webp' }
                        },
                        title: 'Recommended Manga'
                    },
                    url: 'recommendation-url',
                    votes: 42
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaRecommendations(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/recommendations');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaUserUpdates', () => {
        it('should fetch manga user updates without page', async () => {
            const mockResponse: JikanResponse<MangaUserUpdateResponse[]> = {
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
                    chapters_read: 100,
                    chapters_total: 100,
                    volumes_read: 10,
                    volumes_total: 10,
                    date: '2024-01-01'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaUserUpdates(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/userupdates');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch manga user updates with page', async () => {
            const mockResponse: JikanResponse<MangaUserUpdateResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaUserUpdates(1, 2);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/userupdates?page=2');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaReviews', () => {
        it('should fetch manga reviews without parameters', async () => {
            const mockResponse: JikanResponse<MangaReviewResponse[]> = {
                data: [{
                    mal_id: 1,
                    url: 'test-review-url',
                    type: 'manga',
                    votes: 10,
                    date: '2024-01-01',
                    review: 'Great manga!',
                    chapters_read: 100,
                    scores: {
                        overall: 8,
                        story: 9,
                        art: 8,
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

            const result = await mangaClient.getMangaReviews(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/reviews');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch manga reviews with all parameters', async () => {
            const mockResponse: JikanResponse<MangaReviewResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaReviews(1, 2, true, false);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/reviews?page=2&preliminary=true&spoilers=false');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch manga reviews with partial parameters', async () => {
            const mockResponse: JikanResponse<MangaReviewResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaReviews(1, undefined, true);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/reviews?preliminary=true');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaRelations', () => {
        it('should fetch manga relations', async () => {
            const mockResponse: JikanResponse<MangaRelationResponse[]> = {
                data: [{
                    relation: 'Sequel',
                    entry: [{
                        mal_id: 2,
                        type: 'manga',
                        name: 'Related Manga',
                        url: 'test-url'
                    }]
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaRelations(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/relations');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaExternal', () => {
        it('should fetch manga external links', async () => {
            const mockResponse: JikanResponse<MangaExternalResponse[]> = {
                data: [{
                    name: 'Official Website',
                    url: 'https://example.com'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaExternal(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/external');
            expect(result).toEqual(mockResponse);
        });
    });

    // Test manga search functionality with various parameter combinations
    describe('searchManga', () => {
        it('should search manga without parameters', async () => {
            const mockResponse: JikanResponse<MangaResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.searchManga();

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga');
            expect(result).toEqual(mockResponse);
        });

        it('should search manga with parameters', async () => {
            const mockResponse: JikanResponse<MangaResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const searchParams = {
                q: 'Naruto',
                type: 'Manga',
                score: 8,
                status: 'Finished',
                sfw: true,
                page: 1,
                limit: 25,
                magazines: '1,2,3'
            };

            const result = await mangaClient.searchManga(searchParams);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga?q=Naruto&type=Manga&score=8&status=Finished&sfw=true&page=1&limit=25&magazines=1%2C2%2C3');
            expect(result).toEqual(mockResponse);
        });

        it('should search manga with undefined parameters filtered out', async () => {
            const mockResponse: JikanResponse<MangaResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const searchParams = {
                q: 'Naruto',
                score: 8,
                genres: '1,2,3',
                genres_exclude: '4,5'
            };

            const result = await mangaClient.searchManga(searchParams);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga?q=Naruto&score=8&genres=1%2C2%2C3&genres_exclude=4%2C5');
            expect(result).toEqual(mockResponse);
        });

        it('should search manga with order and sort parameters', async () => {
            const mockResponse: JikanResponse<MangaResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const searchParams = {
                order_by: 'score',
                sort: 'desc',
                min_score: 7,
                max_score: 10
            };

            const result = await mangaClient.searchManga(searchParams);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga?order_by=score&sort=desc&min_score=7&max_score=10');
            expect(result).toEqual(mockResponse);
        });

        it('should search manga with date parameters', async () => {
            const mockResponse: JikanResponse<MangaResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const searchParams = {
                start_date: '2020-01-01',
                end_date: '2024-12-31',
                letter: 'a'
            };

            const result = await mangaClient.searchManga(searchParams);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga?start_date=2020-01-01&end_date=2024-12-31&letter=a');
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
            await expect(mangaClient.getMangaByFullId(1)).rejects.toThrow('Network error');
        });

        it('should handle HTTP client errors in search', async () => {
            const error = new Error('Search error');
            mockHttpClient.get.mockRejectedValue(error);

            await expect(mangaClient.searchManga({ q: 'test' })).rejects.toThrow('Search error');
        });
    });

    // Test edge cases
    describe('Edge cases', () => {
        it('should handle empty search results', async () => {
            const mockResponse: JikanResponse<MangaResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.searchManga({ q: 'nonexistent' });

            expect(result.data).toEqual([]);
        });

        it('should handle zero page parameter (treats as no page)', async () => {
            const mockResponse: JikanResponse<MangaNewsResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaNews(1, 0);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/news');
        });

        it('should handle false boolean parameters in reviews', async () => {
            const mockResponse: JikanResponse<MangaReviewResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await mangaClient.getMangaReviews(1, undefined, false, false);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/manga/1/reviews?preliminary=false&spoilers=false');
        });
    });
});