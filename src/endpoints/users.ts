/**
 * @fileoverview Users endpoint class for accessing user-related data from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
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
} from "../types/users";
import JikanResponse from "../types/common";

/**
 * Users endpoint class providing methods to access user-related data
 * @class Users
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const user = await jikan.users.getUserByUsername('username');
 * const stats = await jikan.users.getUserStatistics('username');
 * ```
 */
export class Users {
    /**
     * Creates a new Users endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves user profile information by username
     * @param {string} username - Username of the user
     * @returns {Promise<JikanResponse<UserResponse>>} Promise that resolves to user data
     * @example
     * ```typescript
     * const user = await jikan.users.getUserByUsername('username');
     * console.log(user.data.username);
     * console.log(user.data.joined);
     * ```
     */
    getUserByUsername(username: string): Promise<JikanResponse<UserResponse>> {
        return this.client.get<JikanResponse<UserResponse>>(`/users/${username}`);
    }

    /**
     * Retrieves complete user profile information by username
     * @param {string} username - Username of the user
     * @returns {Promise<JikanResponse<UserResponse>>} Promise that resolves to complete user data
     * @example
     * ```typescript
     * const user = await jikan.users.getUserFullProfile(username);
     * console.log(user.data.username);
     * console.log(user.data.about);
     * ```
     */
    getUserFullProfile(username: string): Promise<JikanResponse<UserResponse>> {
        return this.client.get<JikanResponse<UserResponse>>(`/users/${username}/full`);
    }

    /**
     * Retrieves user statistics (anime/manga completion stats)
     * @param {string} username - Username of the user
     * @returns {Promise<JikanResponse<UserStatisticsResponse>>} Promise that resolves to user statistics
     * @example
     * ```typescript
     * const stats = await jikan.users.getUserStatistics('username');
     * console.log(stats.data.anime.completed);
     * console.log(stats.data.manga.reading);
     * ```
     */
    getUserStatistics(username: string): Promise<JikanResponse<UserStatisticsResponse>> {
        return this.client.get<JikanResponse<UserStatisticsResponse>>(`/users/${username}/statistics`);
    }

    /**
     * Retrieves user's favorite anime, manga, characters, and people
     * @param {string} username - Username of the user
     * @returns {Promise<JikanResponse<UserFavoritesResponse>>} Promise that resolves to user favorites
     * @example
     * ```typescript
     * const favorites = await jikan.users.getUserFavorites('username');
     * console.log(favorites.data.anime);
     * console.log(favorites.data.characters);
     * ```
     */
    getUserFavorites(username: string): Promise<JikanResponse<UserFavoritesResponse>> {
        return this.client.get<JikanResponse<UserFavoritesResponse>>(`/users/${username}/favorites`);
    }

    /**
     * Retrieves user's anime list with optional filtering
     * @param {string} username - Username of the user
     * @param {Object} [params={}] - Optional parameters for filtering
     * @param {string} [params.status] - Status filter (watching, completed, on_hold, dropped, plan_to_watch)
     * @param {number} [params.page] - Page number for pagination
     * @returns {Promise<JikanResponse<UserAnimeListResponse[]>>} Promise that resolves to user's anime list
     * @example
     * ```typescript
     * const animeList = await jikan.users.getUserAnimeList('username', { status: 'completed' });
     * const watching = await jikan.users.getUserAnimeList('username', { status: 'watching' });
     * ```
     */
    getUserAnimeList(username: string, params: {
        status?: string;
        page?: number;
    } = {}): Promise<JikanResponse<UserAnimeListResponse[]>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        const queryString = queryParams.toString();
        return this.client.get<JikanResponse<UserAnimeListResponse[]>>(`/users/${username}/animelist${queryString ? `?${queryString}` : ''}`);
    }

    /**
     * Retrieves user's manga list with optional filtering
     * @param {string} username - Username of the user
     * @param {Object} [params={}] - Optional parameters for filtering
     * @param {string} [params.status] - Status filter (reading, completed, on_hold, dropped, plan_to_read)
     * @param {number} [params.page] - Page number for pagination
     * @returns {Promise<JikanResponse<UserMangaListResponse[]>>} Promise that resolves to user's manga list
     * @example
     * ```typescript
     * const mangaList = await jikan.users.getUserMangaList('username', { status: 'completed' });
     * const reading = await jikan.users.getUserMangaList('username', { status: 'reading' });
     * ```
     */
    getUserMangaList(username: string, params: {
        status?: string;
        page?: number;
    } = {}): Promise<JikanResponse<UserMangaListResponse[]>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        const queryString = queryParams.toString();
        return this.client.get<JikanResponse<UserMangaListResponse[]>>(`/users/${username}/mangalist${queryString ? `?${queryString}` : ''}`);
    }

    /**
     * Retrieves user's friends list
     * @param {string} username - Username of the user
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<UserFriendsResponse[]>>} Promise that resolves to user's friends
     * @example
     * ```typescript
     * const friends = await jikan.users.getUserFriends('username');
     * console.log(friends.data[0].username);
     * ```
     */
    getUserFriends(username: string, page?: number): Promise<JikanResponse<UserFriendsResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<UserFriendsResponse[]>>(`/users/${username}/friends${params}`);
    }

    /**
     * Retrieves reviews written by the user
     * @param {string} username - Username of the user
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<UserReviewResponse[]>>} Promise that resolves to user's reviews
     * @example
     * ```typescript
     * const reviews = await jikan.users.getUserReviews('username');
     * console.log(reviews.data[0].review);
     * ```
     */
    getUserReviews(username: string, page?: number): Promise<JikanResponse<UserReviewResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<UserReviewResponse[]>>(`/users/${username}/reviews${params}`);
    }

    /**
     * Retrieves recommendations made by the user
     * @param {string} username - Username of the user
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<UserRecommendationResponse[]>>} Promise that resolves to user's recommendations
     * @example
     * ```typescript
     * const recommendations = await jikan.users.getUserRecommendations('username');
     * console.log(recommendations.data[0].content);
     * ```
     */
    getUserRecommendations(username: string, page?: number): Promise<JikanResponse<UserRecommendationResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<UserRecommendationResponse[]>>(`/users/${username}/recommendations${params}`);
    }

    /**
     * Retrieves clubs the user is a member of
     * @param {string} username - Username of the user
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<UserClubResponse[]>>} Promise that resolves to user's clubs
     * @example
     * ```typescript
     * const clubs = await jikan.users.getUserClubs('username');
     * console.log(clubs.data[0].name);
     * ```
     */
    getUserClubs(username: string, page?: number): Promise<JikanResponse<UserClubResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<UserClubResponse[]>>(`/users/${username}/clubs${params}`);
    }

    /**
     * Retrieves user's recent updates (anime/manga progress updates)
     * @param {string} username - Username of the user
     * @returns {Promise<JikanResponse<UserUpdateResponse[]>>} Promise that resolves to user's updates
     * @example
     * ```typescript
     * const updates = await jikan.users.getUserUpdates('username');
     * console.log(updates.data[0].entry.title);
     * console.log(updates.data[0].status);
     * ```
     */
    getUserUpdates(username: string): Promise<JikanResponse<UserUpdateResponse[]>> {
        return this.client.get<JikanResponse<UserUpdateResponse[]>>(`/users/${username}/userupdates`);
    }

    /**
     * Retrieves user's about information (profile description)
     * @param {string} username - Username of the user
     * @returns {Promise<JikanResponse<{ about: string }>>} Promise that resolves to user's about info
     * @example
     * ```typescript
     * const about = await jikan.users.getUserAbout('username');
     * console.log(about.data.about);
     * ```
     */
    getUserAbout(username: string): Promise<JikanResponse<{ about: string }>> {
        return this.client.get<JikanResponse<{ about: string }>>(`/users/${username}/about`);
    }

    /**
     * Searches for users by username
     * @param {Object} [params={}] - Search parameters
     * @param {string} [params.q] - Search query (username)
     * @param {number} [params.page] - Page number for pagination
     * @param {number} [params.limit] - Results per page (max 25)
     * @returns {Promise<JikanResponse<UserResponse[]>>} Promise that resolves to search results
     * @example
     * ```typescript
     * const users = await jikan.users.searchUsers({ q: 'username' });
     * console.log(users.data[0].username);
     * ```
     */
    searchUsers(params: {
        q?: string;
        page?: number;
        limit?: number;
    } = {}): Promise<JikanResponse<UserResponse[]>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        const queryString = queryParams.toString();
        return this.client.get<JikanResponse<UserResponse[]>>(`/users${queryString ? `?${queryString}` : ''}`);
    }
}