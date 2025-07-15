/**
 * @fileoverview Test suite for the Users endpoint class
 * Tests all methods of the Users class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { Users } from '../endpoints/users';
import JikanHttpClient from '../client/http-client';
import { 
    UserResponse,
    UserStatisticsResponse,
    UserFavoritesResponse,
    UserAnimeListResponse,
    UserMangaListResponse,
    UserFriendsResponse,
    UserReviewResponse,
    UserRecommendationResponse,
    UserClubResponse,
    UserUpdateResponse
} from '../types/users';
import JikanResponse from '../types/common';

jest.mock('../client/http-client');

describe('Users Class', () => {
    let usersClient: Users;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        usersClient = new Users(mockHttpClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getUserByUsername', () => {
        it('should fetch user by username', async () => {
            const mockResponse: JikanResponse<UserResponse> = {
                data: {
                    mal_id: 1,
                    username: 'testuser',
                    url: 'https://myanimelist.net/profile/testuser',
                    images: {
                        jpg: { image_url: 'https://example.com/image.jpg' },
                        webp: { image_url: 'https://example.com/image.webp' }
                    },
                    last_online: '2023-01-01T00:00:00+00:00',
                    joined: '2020-01-01T00:00:00+00:00'
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserByUsername('testuser');

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getUserFullProfile', () => {
        it('should fetch full user profile by username', async () => {
            const mockResponse: JikanResponse<UserResponse> = {
                data: {
                    mal_id: 1,
                    username: 'testuser',
                    url: 'https://myanimelist.net/profile/testuser',
                    images: {
                        jpg: { image_url: 'https://example.com/image.jpg' },
                        webp: { image_url: 'https://example.com/image.webp' }
                    },
                    last_online: '2023-01-01T00:00:00+00:00',
                    joined: '2020-01-01T00:00:00+00:00'
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserFullProfile('testuser');

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/full');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getUserStatistics', () => {
        it('should fetch user statistics', async () => {
            const mockResponse: JikanResponse<UserStatisticsResponse> = {
                data: {
                    anime: {
                        days_watched: 100.5,
                        mean_score: 8.5,
                        watching: 10,
                        completed: 150,
                        on_hold: 5,
                        dropped: 3,
                        plan_to_watch: 20,
                        total_entries: 188,
                        rewatched: 2,
                        episodes_watched: 1500
                    },
                    manga: {
                        days_read: 50.2,
                        mean_score: 8.0,
                        reading: 5,
                        completed: 80,
                        on_hold: 3,
                        dropped: 1,
                        plan_to_read: 15,
                        total_entries: 104,
                        reread: 1,
                        chapters_read: 800,
                        volumes_read: 100
                    }
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserStatistics('testuser');

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/statistics');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getUserAnimeList', () => {
        it('should fetch user anime list without parameters', async () => {
            const mockResponse: JikanResponse<UserAnimeListResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserAnimeList('testuser');

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/animelist');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch user anime list with status filter', async () => {
            const mockResponse: JikanResponse<UserAnimeListResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserAnimeList('testuser', { status: 'completed' });

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/animelist?status=completed');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch user anime list with pagination', async () => {
            const mockResponse: JikanResponse<UserAnimeListResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserAnimeList('testuser', { page: 2 });

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/animelist?page=2');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getUserMangaList', () => {
        it('should fetch user manga list without parameters', async () => {
            const mockResponse: JikanResponse<UserMangaListResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserMangaList('testuser');

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/mangalist');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch user manga list with status filter', async () => {
            const mockResponse: JikanResponse<UserMangaListResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserMangaList('testuser', { status: 'reading' });

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/mangalist?status=reading');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getUserFriends', () => {
        it('should fetch user friends without pagination', async () => {
            const mockResponse: JikanResponse<UserFriendsResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserFriends('testuser');

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/friends');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch user friends with pagination', async () => {
            const mockResponse: JikanResponse<UserFriendsResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserFriends('testuser', 2);

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/friends?page=2');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('searchUsers', () => {
        it('should search users without parameters', async () => {
            const mockResponse: JikanResponse<UserResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.searchUsers();

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users');
            expect(result).toEqual(mockResponse);
        });

        it('should search users with query', async () => {
            const mockResponse: JikanResponse<UserResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.searchUsers({ q: 'testuser' });

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users?q=testuser');
            expect(result).toEqual(mockResponse);
        });

        it('should search users with multiple parameters', async () => {
            const mockResponse: JikanResponse<UserResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.searchUsers({ q: 'test', page: 2, limit: 10 });

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users?q=test&page=2&limit=10');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getUserAbout', () => {
        it('should fetch user about information', async () => {
            const mockResponse: JikanResponse<{ about: string }> = {
                data: {
                    about: 'This is a test user profile description.'
                }
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserAbout('testuser');

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/about');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getUserUpdates', () => {
        it('should fetch user updates', async () => {
            const mockResponse: JikanResponse<UserUpdateResponse[]> = {
                data: []
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await usersClient.getUserUpdates('testuser');

            expect(mockHttpClient.get).toHaveBeenCalledWith('/users/testuser/userupdates');
            expect(result).toEqual(mockResponse);
        });
    });
});