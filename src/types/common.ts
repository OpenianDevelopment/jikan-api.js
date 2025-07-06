/**
 * @fileoverview Common type definitions for Jikan API responses
 */

/**
 * Standard response wrapper for all Jikan API endpoints
 * @template T - The type of data contained in the response
 * @interface JikanResponse
 */
interface JikanResponse<T> {
    /** The actual data returned by the API */
    data: T;
    
    /** Pagination information for paginated responses */
    pagination?: {
        /** Last visible page number */
        last_visible_page: number;
        /** Whether there are more pages available */
        has_next_page: boolean;
        /** Current page number */
        current_page: number;
        /** Information about the items in the current page */
        items: {
            /** Number of items in the current page */
            count: number;
            /** Total number of items available */
            total: number;
            /** Maximum number of items per page */
            per_page: number;
        };
    };
}

export default JikanResponse;