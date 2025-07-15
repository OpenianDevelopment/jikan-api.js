/**
 * @fileoverview Schedules endpoint class for accessing schedule-related data from the Jikan API
 */

import JikanHttpClient from "../client/http-client";
import { 
    ScheduleResponse,
    ScheduleParams
} from "../types/schedules";
import JikanResponse from "../types/common";

/**
 * Schedules endpoint class providing methods to access anime schedule data
 * @class Schedules
 * @example
 * ```typescript
 * const jikan = new Jikan();
 * const schedule = await jikan.schedules.getSchedules();
 * const mondayAnime = await jikan.schedules.getSchedules({ filter: 'monday' });
 * ```
 */
export class Schedules {
    /**
     * Creates a new Schedules endpoint instance
     * @param {JikanHttpClient} client - HTTP client for API requests
     */
    constructor(private client: JikanHttpClient) {}

    /**
     * Retrieves anime schedule information
     * @param {ScheduleParams} [params={}] - Schedule filter parameters
     * @returns {Promise<JikanResponse<ScheduleResponse>>} Promise that resolves to schedule data
     * @example
     * ```typescript
     * // Get all scheduled anime
     * const schedule = await jikan.schedules.getSchedules();
     * 
     * // Get Monday anime only
     * const mondayAnime = await jikan.schedules.getSchedules({ 
     *   filter: 'monday' 
     * });
     * 
     * // Get safe-for-work anime with pagination
     * const sfwSchedule = await jikan.schedules.getSchedules({
     *   sfw: true,
     *   page: 2,
     *   limit: 10
     * });
     * 
     * schedule.data.forEach(anime => {
     *   console.log(`${anime.title} - ${anime.broadcast.string}`);
     * });
     * ```
     */
    async getSchedules(params: ScheduleParams = {}): Promise<JikanResponse<ScheduleResponse>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        
        const url = `schedules${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        return this.client.get<ScheduleResponse>(url);
    }

    /**
     * Retrieves anime scheduled for Monday
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<ScheduleResponse>>} Promise that resolves to Monday schedule
     * @example
     * ```typescript
     * const mondayAnime = await jikan.schedules.getMondaySchedule();
     * mondayAnime.data.forEach(anime => {
     *   console.log(`${anime.title} airs on ${anime.broadcast.string}`);
     * });
     * ```
     */
    async getMondaySchedule(page?: number): Promise<JikanResponse<ScheduleResponse>> {
        const params: ScheduleParams = { filter: 'monday' };
        if (page) params.page = page;
        return this.getSchedules(params);
    }

    /**
     * Retrieves anime scheduled for Tuesday
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<ScheduleResponse>>} Promise that resolves to Tuesday schedule
     */
    async getTuesdaySchedule(page?: number): Promise<JikanResponse<ScheduleResponse>> {
        const params: ScheduleParams = { filter: 'tuesday' };
        if (page) params.page = page;
        return this.getSchedules(params);
    }

    /**
     * Retrieves anime scheduled for Wednesday
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<ScheduleResponse>>} Promise that resolves to Wednesday schedule
     */
    async getWednesdaySchedule(page?: number): Promise<JikanResponse<ScheduleResponse>> {
        const params: ScheduleParams = { filter: 'wednesday' };
        if (page) params.page = page;
        return this.getSchedules(params);
    }

    /**
     * Retrieves anime scheduled for Thursday
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<ScheduleResponse>>} Promise that resolves to Thursday schedule
     */
    async getThursdaySchedule(page?: number): Promise<JikanResponse<ScheduleResponse>> {
        const params: ScheduleParams = { filter: 'thursday' };
        if (page) params.page = page;
        return this.getSchedules(params);
    }

    /**
     * Retrieves anime scheduled for Friday
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<ScheduleResponse>>} Promise that resolves to Friday schedule
     */
    async getFridaySchedule(page?: number): Promise<JikanResponse<ScheduleResponse>> {
        const params: ScheduleParams = { filter: 'friday' };
        if (page) params.page = page;
        return this.getSchedules(params);
    }

    /**
     * Retrieves anime scheduled for Saturday
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<ScheduleResponse>>} Promise that resolves to Saturday schedule
     */
    async getSaturdaySchedule(page?: number): Promise<JikanResponse<ScheduleResponse>> {
        const params: ScheduleParams = { filter: 'saturday' };
        if (page) params.page = page;
        return this.getSchedules(params);
    }

    /**
     * Retrieves anime scheduled for Sunday
     * @param {number} [page] - Page number for pagination
     * @returns {Promise<JikanResponse<ScheduleResponse>>} Promise that resolves to Sunday schedule
     */
    async getSundaySchedule(page?: number): Promise<JikanResponse<ScheduleResponse>> {
        const params: ScheduleParams = { filter: 'sunday' };
        if (page) params.page = page;
        return this.getSchedules(params);
    }
}