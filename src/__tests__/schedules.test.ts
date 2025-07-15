/**
 * @fileoverview Test suite for the Schedules endpoint class
 * Tests all methods of the Schedules class to ensure proper API endpoint calls
 * and response handling using mocked HTTP client
 */

import { Schedules } from '../endpoints/schedules';
import JikanHttpClient from '../client/http-client';
import { ScheduleResponse } from '../types/schedules';
import JikanResponse from '../types/common';

jest.mock('../client/http-client');

describe('Schedules Class', () => {
    let schedulesClient: Schedules;
    let mockHttpClient: jest.Mocked<JikanHttpClient>;

    beforeEach(() => {
        mockHttpClient = new JikanHttpClient() as jest.Mocked<JikanHttpClient>;
        schedulesClient = new Schedules(mockHttpClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const createMockScheduleEntry = () => ({
        mal_id: 1,
        url: 'https://myanimelist.net/anime/1',
        title: 'Test Anime',
        titles: [{ type: 'Default', title: 'Test Anime' }],
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
        type: 'TV',
        source: 'Manga',
        episodes: 12,
        status: 'Currently Airing',
        airing: true,
        aired: {
            from: '2023-01-01T00:00:00+00:00',
            to: null,
            prop: {
                from: { day: 1, month: 1, year: 2023 },
                to: { day: null, month: null, year: null }
            },
            string: 'Jan 1, 2023 to ?'
        },
        duration: '24 min per ep',
        rating: 'PG-13',
        score: 8.5,
        scored_by: 12345,
        rank: 100,
        popularity: 500,
        members: 50000,
        favorites: 1000,
        synopsis: 'A test anime description',
        background: 'Background info',
        season: 'winter',
        year: 2023,
        broadcast: {
            day: 'Mondays',
            time: '22:30',
            timezone: 'Asia/Tokyo',
            string: 'Mondays at 22:30 (JST)'
        },
        producers: [],
        licensors: [],
        studios: [],
        genres: [],
        explicit_genres: [],
        themes: [],
        demographics: []
    });

    describe('getSchedules', () => {
        it('should fetch schedules without parameters', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getSchedules();

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch schedules with filter parameter', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getSchedules({ filter: 'monday' });

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=monday');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch schedules with multiple parameters', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getSchedules({
                filter: 'tuesday',
                sfw: true,
                page: 2,
                limit: 10
            });

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=tuesday&sfw=true&page=2&limit=10');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getMondaySchedule', () => {
        it('should fetch Monday schedule without pagination', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getMondaySchedule();

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=monday');
            expect(result).toEqual(mockResponse);
        });

        it('should fetch Monday schedule with pagination', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getMondaySchedule(2);

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=monday&page=2');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getTuesdaySchedule', () => {
        it('should fetch Tuesday schedule', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getTuesdaySchedule();

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=tuesday');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getWednesdaySchedule', () => {
        it('should fetch Wednesday schedule', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getWednesdaySchedule();

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=wednesday');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getThursdaySchedule', () => {
        it('should fetch Thursday schedule', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getThursdaySchedule();

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=thursday');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getFridaySchedule', () => {
        it('should fetch Friday schedule', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getFridaySchedule();

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=friday');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getSaturdaySchedule', () => {
        it('should fetch Saturday schedule', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getSaturdaySchedule();

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=saturday');
            expect(result).toEqual(mockResponse);
        });
    });

    describe('getSundaySchedule', () => {
        it('should fetch Sunday schedule', async () => {
            const mockResponse: JikanResponse<ScheduleResponse> = {
                data: [createMockScheduleEntry()]
            };

            mockHttpClient.get.mockResolvedValue(mockResponse);

            const result = await schedulesClient.getSundaySchedule();

            expect(mockHttpClient.get).toHaveBeenCalledWith('schedules?filter=sunday');
            expect(result).toEqual(mockResponse);
        });
    });
});