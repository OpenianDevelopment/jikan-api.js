/**
 * @fileoverview Test suite for the Recommendations endpoint class
 * Tests all methods of the Recommendations class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { Recommendations } from '../endpoints/recommendations';
import JikanHttpClient from '../client/http-client';
import { 
    AnimeRecommendationResponse,
    MangaRecommendationResponse,
    RecommendationData
} from '../types/recommendations';
import JikanResponse from '../types/common';

jest.mock('../client/http-client');

describe('Recommendations Class', () => {
    let recommendationsClient: Recommendations;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        recommendationsClient = new Recommendations(mockHttpClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getRecentAnimeRecommendations', () => {
        it('should fetch recent anime recommendations without page parameter', async () => {
            const mockRecommendation: RecommendationData = {
                mal_id: '1',
                entry: [
                    {
                        mal_id: 1,
                        url: 'https://myanimelist.net/anime/1',
                        title: 'Cowboy Bebop',
                        images: {
                            jpg: {
                                image_url: 'https://example.com/1.jpg',
                                small_image_url: 'https://example.com/1_small.jpg',
                                large_image_url: 'https://example.com/1_large.jpg'
                            },
                            webp: {
                                image_url: 'https://example.com/1.webp',
                                small_image_url: 'https://example.com/1_small.webp',
                                large_image_url: 'https://example.com/1_large.webp'
                            }
                        }
                    },
                    {
                        mal_id: 2,
                        url: 'https://myanimelist.net/anime/2',
                        title: 'Samurai Champloo',
                        images: {
                            jpg: {
                                image_url: 'https://example.com/2.jpg',
                                small_image_url: 'https://example.com/2_small.jpg',
                                large_image_url: 'https://example.com/2_large.jpg'
                            },
                            webp: {
                                image_url: 'https://example.com/2.webp',
                                small_image_url: 'https://example.com/2_small.webp',
                                large_image_url: 'https://example.com/2_large.webp'
                            }
                        }
                    }
                ],
                content: 'Both have great soundtracks and similar vibe',
                date: '2023-01-01T00:00:00+00:00',
                user: {
                    username: 'testuser',
                    url: 'https://myanimelist.net/profile/testuser'
                }
            };

            const mockResponse: JikanResponse<AnimeRecommendationResponse> = {
                data: [mockRecommendation]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await recommendationsClient.getRecentAnimeRecommendations();

            expect(mockHttpClient.get).toHaveBeenCalledWith('recommendations/anime');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch recent anime recommendations with page parameter', async () => {
            const mockResponse: JikanResponse<AnimeRecommendationResponse> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await recommendationsClient.getRecentAnimeRecommendations(2);

            expect(mockHttpClient.get).toHaveBeenCalledWith('recommendations/anime?page=2');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch recent anime recommendations with page 1 (no page param in URL)', async () => {
            const mockResponse: JikanResponse<AnimeRecommendationResponse> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await recommendationsClient.getRecentAnimeRecommendations(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('recommendations/anime');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getRecentMangaRecommendations', () => {
        it('should fetch recent manga recommendations without page parameter', async () => {
            const mockRecommendation: RecommendationData = {
                mal_id: '2',
                entry: [
                    {
                        mal_id: 1,
                        url: 'https://myanimelist.net/manga/1',
                        title: 'Monster',
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
                        }
                    },
                    {
                        mal_id: 2,
                        url: 'https://myanimelist.net/manga/2',
                        title: '20th Century Boys',
                        images: {
                            jpg: {
                                image_url: 'https://example.com/manga2.jpg',
                                small_image_url: 'https://example.com/manga2_small.jpg',
                                large_image_url: 'https://example.com/manga2_large.jpg'
                            },
                            webp: {
                                image_url: 'https://example.com/manga2.webp',
                                small_image_url: 'https://example.com/manga2_small.webp',
                                large_image_url: 'https://example.com/manga2_large.webp'
                            }
                        }
                    }
                ],
                content: 'Both are psychological thrillers by Naoki Urasawa',
                date: '2023-01-01T00:00:00+00:00',
                user: {
                    username: 'mangafan',
                    url: 'https://myanimelist.net/profile/mangafan'
                }
            };

            const mockResponse: JikanResponse<MangaRecommendationResponse> = {
                data: [mockRecommendation]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await recommendationsClient.getRecentMangaRecommendations();

            expect(mockHttpClient.get).toHaveBeenCalledWith('recommendations/manga');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch recent manga recommendations with page parameter', async () => {
            const mockResponse: JikanResponse<MangaRecommendationResponse> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await recommendationsClient.getRecentMangaRecommendations(3);

            expect(mockHttpClient.get).toHaveBeenCalledWith('recommendations/manga?page=3');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch recent manga recommendations with page 1 (no page param in URL)', async () => {
            const mockResponse: JikanResponse<MangaRecommendationResponse> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await recommendationsClient.getRecentMangaRecommendations(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('recommendations/manga');
            expect(result).toEqual(mockResponse);
        });
    });
});