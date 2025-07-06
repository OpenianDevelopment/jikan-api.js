/**
 * @fileoverview Test suite for the Characters endpoint class
 * Tests all methods of the Characters class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { Characters } from '../endpoints/characters';
import JikanHttpClient from '../client/http-client';
import { 
    CharacterResponse,
    CharacterAnimeResponse,
    CharacterMangaResponse,
    CharacterVoiceActorResponse,
    CharacterPictureResponse
} from '../types/characters';
import JikanResponse from '../types/common';

// Mock the HTTP client to avoid actual network calls in tests
jest.mock('../client/http-client');

describe('Characters Class', () => {
    let charactersClient: Characters;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    // Set up fresh instances before each test
    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        charactersClient = new Characters(mockHttpClient);
    });

    // Clean up mocks after each test to prevent test interference
    afterEach(() => {
        jest.clearAllMocks();
    });

    // Test character information retrieval
    describe('getCharacterByFullId', () => {
        it('should fetch full character by ID', async () => {
            // Mock response with minimal required fields for CharacterResponse
            const mockResponse: JikanResponse<CharacterResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/character/1',
                    images: {
                        jpg: { 
                            image_url: 'test.jpg',
                            small_image_url: 'test_small.jpg'
                        },
                        webp: { 
                            image_url: 'test.webp',
                            small_image_url: 'test_small.webp'
                        }
                    },
                    name: 'Test Character',
                    name_kanji: 'テストキャラクター',
                    nicknames: ['Tester', 'Test-kun'],
                    favorites: 1000,
                    about: 'A test character for unit testing purposes.'
                }
            };

            // Configure mock to return our test data
            mockHttpClient.get.mockResolvedValue(mockResponse);

            // Execute the method under test
            const result = await charactersClient.getCharacterByFullId(1);

            // Verify the correct endpoint was called and result is as expected
            expect(mockHttpClient.get).toHaveBeenCalledWith('/characters/1/full');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getCharacterById', () => {
        it('should fetch basic character by ID', async () => {
            const mockResponse: JikanResponse<CharacterResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/character/1',
                    images: {
                        jpg: { 
                            image_url: 'test.jpg',
                            small_image_url: 'test_small.jpg'
                        },
                        webp: { 
                            image_url: 'test.webp',
                            small_image_url: 'test_small.webp'
                        }
                    },
                    name: 'Test Character',
                    nicknames: [],
                    favorites: 500
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterById(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/characters/1');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getCharacterAnime', () => {
        it('should fetch character anime appearances', async () => {
            const mockResponse: JikanResponse<CharacterAnimeResponse[]> = {
                data: [{
                    role: 'Main',
                    anime: {
                        mal_id: 1,
                        url: 'https://myanimelist.net/anime/1',
                        images: {
                            jpg: {
                                image_url: 'anime.jpg',
                                small_image_url: 'anime_small.jpg',
                                large_image_url: 'anime_large.jpg'
                            },
                            webp: {
                                image_url: 'anime.webp',
                                small_image_url: 'anime_small.webp',
                                large_image_url: 'anime_large.webp'
                            }
                        },
                        title: 'Test Anime'
                    }
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterAnime(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/characters/1/anime');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getCharacterManga', () => {
        it('should fetch character manga appearances', async () => {
            const mockResponse: JikanResponse<CharacterMangaResponse[]> = {
                data: [{
                    role: 'Main',
                    manga: {
                        mal_id: 1,
                        url: 'https://myanimelist.net/manga/1',
                        images: {
                            jpg: {
                                image_url: 'manga.jpg',
                                small_image_url: 'manga_small.jpg',
                                large_image_url: 'manga_large.jpg'
                            },
                            webp: {
                                image_url: 'manga.webp',
                                small_image_url: 'manga_small.webp',
                                large_image_url: 'manga_large.webp'
                            }
                        },
                        title: 'Test Manga'
                    }
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterManga(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/characters/1/manga');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getCharacterVoices', () => {
        it('should fetch character voice actors', async () => {
            const mockResponse: JikanResponse<CharacterVoiceActorResponse[]> = {
                data: [{
                    language: 'Japanese',
                    person: {
                        mal_id: 1,
                        url: 'https://myanimelist.net/people/1',
                        images: {
                            jpg: {
                                image_url: 'voice_actor.jpg'
                            }
                        },
                        name: 'Test Voice Actor'
                    }
                }, {
                    language: 'English',
                    person: {
                        mal_id: 2,
                        url: 'https://myanimelist.net/people/2',
                        images: {
                            jpg: {
                                image_url: 'voice_actor_en.jpg'
                            }
                        },
                        name: 'Test English Voice Actor'
                    }
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterVoices(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/characters/1/voices');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getCharacterPictures', () => {
        it('should fetch character pictures', async () => {
            const mockResponse: JikanResponse<CharacterPictureResponse[]> = {
                data: [{
                    large_image_url: 'character_large_1.jpg',
                    small_image_url: 'character_small_1.jpg'
                }, {
                    large_image_url: 'character_large_2.jpg',
                    small_image_url: 'character_small_2.jpg'
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterPictures(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/characters/1/pictures');
            expect(result).toEqual(mockResponse);
        });
    });

    // Test error handling scenarios
    describe('Error handling', () => {
        it('should handle HTTP client errors in getCharacterByFullId', async () => {
            // Mock HTTP client to throw an error
            const error = new Error('Network error');
            mockHttpClient.get.mockRejectedValue(error);

            // Verify that the error is properly propagated
            await expect(charactersClient.getCharacterByFullId(1)).rejects.toThrow('Network error');
        });

        it('should handle HTTP client errors in getCharacterById', async () => {
            const error = new Error('Character not found');
            mockHttpClient.get.mockRejectedValue(error);

            await expect(charactersClient.getCharacterById(1)).rejects.toThrow('Character not found');
        });

        it('should handle HTTP client errors in getCharacterAnime', async () => {
            const error = new Error('Anime data error');
            mockHttpClient.get.mockRejectedValue(error);

            await expect(charactersClient.getCharacterAnime(1)).rejects.toThrow('Anime data error');
        });

        it('should handle HTTP client errors in getCharacterManga', async () => {
            const error = new Error('Manga data error');
            mockHttpClient.get.mockRejectedValue(error);

            await expect(charactersClient.getCharacterManga(1)).rejects.toThrow('Manga data error');
        });

        it('should handle HTTP client errors in getCharacterVoices', async () => {
            const error = new Error('Voice actor data error');
            mockHttpClient.get.mockRejectedValue(error);

            await expect(charactersClient.getCharacterVoices(1)).rejects.toThrow('Voice actor data error');
        });

        it('should handle HTTP client errors in getCharacterPictures', async () => {
            const error = new Error('Pictures data error');
            mockHttpClient.get.mockRejectedValue(error);

            await expect(charactersClient.getCharacterPictures(1)).rejects.toThrow('Pictures data error');
        });
    });

    // Test edge cases
    describe('Edge cases', () => {
        it('should handle empty anime appearances', async () => {
            const mockResponse: JikanResponse<CharacterAnimeResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterAnime(1);

            expect(result.data).toEqual([]);
        });

        it('should handle empty manga appearances', async () => {
            const mockResponse: JikanResponse<CharacterMangaResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterManga(1);

            expect(result.data).toEqual([]);
        });

        it('should handle empty voice actors', async () => {
            const mockResponse: JikanResponse<CharacterVoiceActorResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterVoices(1);

            expect(result.data).toEqual([]);
        });

        it('should handle empty pictures', async () => {
            const mockResponse: JikanResponse<CharacterPictureResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterPictures(1);

            expect(result.data).toEqual([]);
        });

        it('should handle character with minimal data', async () => {
            const mockResponse: JikanResponse<CharacterResponse> = {
                data: {
                    mal_id: 999,
                    url: 'https://myanimelist.net/character/999',
                    images: {
                        jpg: {},
                        webp: {}
                    },
                    name: 'Minimal Character',
                    nicknames: []
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterById(999);

            expect(result.data.name).toBe('Minimal Character');
            expect(result.data.nicknames).toEqual([]);
            expect(result.data.about).toBeUndefined();
            expect(result.data.favorites).toBeUndefined();
        });
    });

    // Test data structure validation
    describe('Data structure validation', () => {
        it('should return character data with correct structure', async () => {
            const mockResponse: JikanResponse<CharacterResponse> = {
                data: {
                    mal_id: 1,
                    url: 'https://myanimelist.net/character/1',
                    images: {
                        jpg: { 
                            image_url: 'test.jpg',
                            small_image_url: 'test_small.jpg'
                        },
                        webp: { 
                            image_url: 'test.webp',
                            small_image_url: 'test_small.webp'
                        }
                    },
                    name: 'Test Character',
                    nicknames: ['Test'],
                    favorites: 100
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterById(1);

            expect(result.data).toHaveProperty('mal_id');
            expect(result.data).toHaveProperty('url');
            expect(result.data).toHaveProperty('images');
            expect(result.data).toHaveProperty('name');
            expect(result.data).toHaveProperty('nicknames');
            expect(result.data.images).toHaveProperty('jpg');
            expect(result.data.images).toHaveProperty('webp');
            expect(Array.isArray(result.data.nicknames)).toBe(true);
        });

        it('should return anime appearances with correct structure', async () => {
            const mockResponse: JikanResponse<CharacterAnimeResponse[]> = {
                data: [{
                    role: 'Main',
                    anime: {
                        mal_id: 1,
                        url: 'test-url',
                        images: {
                            jpg: { image_url: 'test.jpg' },
                            webp: { image_url: 'test.webp' }
                        },
                        title: 'Test Anime'
                    }
                }]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await charactersClient.getCharacterAnime(1);

            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data[0]).toHaveProperty('role');
            expect(result.data[0]).toHaveProperty('anime');
            if (result.data[0]) {
                expect(result.data[0].anime).toHaveProperty('mal_id');
                expect(result.data[0].anime).toHaveProperty('title');
                expect(result.data[0].anime).toHaveProperty('images');
            }
        });
    });
});