/**
 * @fileoverview Test suite for the People endpoint class
 * Tests all methods of the People class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { People } from '../endpoints/people';
import JikanHttpClient from '../client/http-client';
import { 
    PersonResponse,
    PersonAnimeResponse,
    PersonMangaResponse,
    PersonVoicesResponse,
    PersonPicturesResponse,
    PersonExternalResponse
} from '../types/people';
import JikanResponse from '../types/common';

jest.mock('../client/http-client');

describe('People Class', () => {
    let peopleClient: People;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        peopleClient = new People(mockHttpClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getPersonById', () => {
        it('should fetch person by ID', async () => {
            const mockResponse: JikanResponse<PersonResponse> = {
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

            const result = await peopleClient.getPersonById(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('people/1');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getPersonFullById', () => {
        it('should fetch full person information by ID', async () => {
            const mockResponse: JikanResponse<PersonResponse> = {
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

            const result = await peopleClient.getPersonFullById(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('people/1/full');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getPersonAnime', () => {
        it('should fetch person anime work', async () => {
            const mockResponse: JikanResponse<PersonAnimeResponse> = {
                data: [
                    {
                        position: 'Director',
                        anime: {
                            mal_id: 164,
                            url: 'https://myanimelist.net/anime/164',
                            title: 'Spirited Away',
                            images: {
                                jpg: {
                                    image_url: 'https://example.com/anime164.jpg',
                                    small_image_url: 'https://example.com/anime164_small.jpg',
                                    large_image_url: 'https://example.com/anime164_large.jpg'
                                },
                                webp: {
                                    image_url: 'https://example.com/anime164.webp',
                                    small_image_url: 'https://example.com/anime164_small.webp',
                                    large_image_url: 'https://example.com/anime164_large.webp'
                                }
                            }
                        }
                    }
                ]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await peopleClient.getPersonAnime(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('people/1/anime');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getPersonManga', () => {
        it('should fetch person manga work', async () => {
            const mockResponse: JikanResponse<PersonMangaResponse> = {
                data: [
                    {
                        position: 'Story & Art',
                        manga: {
                            mal_id: 1,
                            url: 'https://myanimelist.net/manga/1',
                            title: 'Nausicaä of the Valley of the Wind',
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
                        }
                    }
                ]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await peopleClient.getPersonManga(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('people/1/manga');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getPersonVoices', () => {
        it('should fetch person voice acting roles', async () => {
            const mockResponse: JikanResponse<PersonVoicesResponse> = {
                data: [
                    {
                        role: 'Main',
                        anime: {
                            mal_id: 1,
                            url: 'https://myanimelist.net/anime/1',
                            title: 'Cowboy Bebop',
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
                            }
                        },
                        character: {
                            mal_id: 1,
                            url: 'https://myanimelist.net/character/1',
                            name: 'Spike Spiegel',
                            images: {
                                jpg: {
                                    image_url: 'https://example.com/character1.jpg',
                                    small_image_url: 'https://example.com/character1_small.jpg'
                                },
                                webp: {
                                    image_url: 'https://example.com/character1.webp',
                                    small_image_url: 'https://example.com/character1_small.webp'
                                }
                            }
                        }
                    }
                ]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await peopleClient.getPersonVoices(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('people/1/voices');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getPersonPictures', () => {
        it('should fetch person pictures', async () => {
            const mockResponse: JikanResponse<PersonPicturesResponse> = {
                data: [
                    {
                        large_image_url: 'https://example.com/person1_large.jpg',
                        small_image_url: 'https://example.com/person1_small.jpg'
                    },
                    {
                        large_image_url: 'https://example.com/person1_2_large.jpg',
                        small_image_url: 'https://example.com/person1_2_small.jpg'
                    }
                ]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await peopleClient.getPersonPictures(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('people/1/pictures');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getPersonExternal', () => {
        it('should fetch person external links', async () => {
            const mockResponse: JikanResponse<PersonExternalResponse> = {
                data: [
                    {
                        name: 'Official Website',
                        url: 'https://www.ghibli.jp/'
                    },
                    {
                        name: 'Wikipedia',
                        url: 'https://en.wikipedia.org/wiki/Hayao_Miyazaki'
                    }
                ]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await peopleClient.getPersonExternal(1);

            expect(mockHttpClient.get).toHaveBeenCalledWith('people/1/external');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('searchPeople', () => {
        it('should search people without parameters', async () => {
            const mockResponse: JikanResponse<PersonResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await peopleClient.searchPeople();

            expect(mockHttpClient.get).toHaveBeenCalledWith('people');
            expect(result).toEqual(mockResponse);
        });

        it('should search people with query', async () => {
            const mockResponse: JikanResponse<PersonResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await peopleClient.searchPeople({ q: 'Miyazaki' });

            expect(mockHttpClient.get).toHaveBeenCalledWith('people?q=Miyazaki');
            expect(result).toEqual(mockResponse);
        });

        it('should search people with multiple parameters', async () => {
            const mockResponse: JikanResponse<PersonResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await peopleClient.searchPeople({
                q: 'director',
                order_by: 'favorites',
                sort: 'desc',
                limit: 10,
                page: 2
            });

            expect(mockHttpClient.get).toHaveBeenCalledWith('people?q=director&order_by=favorites&sort=desc&limit=10&page=2');
            expect(result).toEqual(mockResponse);
        });
    });
});