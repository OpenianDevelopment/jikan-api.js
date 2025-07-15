/**
 * @fileoverview Test suite for the Genres endpoint class
 * Tests all methods of the Genres class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { Genres } from '../endpoints/genres';
import JikanHttpClient from '../client/http-client';
import { 
    AnimeGenresResponse,
    MangaGenresResponse
} from '../types/genres';
import JikanResponse from '../types/common';

jest.mock('../client/http-client');

describe('Genres Class', () => {
    let genresClient: Genres;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        genresClient = new Genres(mockHttpClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getAnimeGenres', () => {
        it('should fetch anime genres', async () => {
            const mockResponse: JikanResponse<AnimeGenresResponse> = {
                data: [
                    {
                        mal_id: 1,
                        name: 'Action',
                        url: 'https://myanimelist.net/anime/genre/1/Action',
                        count: 4234
                    },
                    {
                        mal_id: 2,
                        name: 'Adventure',
                        url: 'https://myanimelist.net/anime/genre/2/Adventure',
                        count: 3021
                    },
                    {
                        mal_id: 4,
                        name: 'Comedy',
                        url: 'https://myanimelist.net/anime/genre/4/Comedy',
                        count: 5678
                    }
                ]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await genresClient.getAnimeGenres();

            expect(mockHttpClient.get).toHaveBeenCalledWith('genres/anime');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMangaGenres', () => {
        it('should fetch manga genres', async () => {
            const mockResponse: JikanResponse<MangaGenresResponse> = {
                data: [
                    {
                        mal_id: 1,
                        name: 'Action',
                        url: 'https://myanimelist.net/manga/genre/1/Action',
                        count: 2145
                    },
                    {
                        mal_id: 2,
                        name: 'Adventure',
                        url: 'https://myanimelist.net/manga/genre/2/Adventure',
                        count: 1876
                    },
                    {
                        mal_id: 4,
                        name: 'Comedy',
                        url: 'https://myanimelist.net/manga/genre/4/Comedy',
                        count: 3456
                    }
                ]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await genresClient.getMangaGenres();

            expect(mockHttpClient.get).toHaveBeenCalledWith('genres/manga');
            expect(result).toEqual(mockResponse);
        });
    });
});