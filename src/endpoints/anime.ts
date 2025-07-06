import JikanHttpClient from "../client/http-client";
import { 
    AnimeResponse,
    AnimeCharacterResponse,
    AnimeStaffResponse,
    AnimeEpisodeResponse,
    AnimeNewsResponse,
    AnimeForumResponse,
    AnimeVideoResponse,
    AnimePictureResponse,
    AnimeStatisticsResponse,
    AnimeRecommendationResponse,
    AnimeUserUpdateResponse,
    AnimeReviewResponse,
    AnimeRelationResponse,
    AnimeThemeResponse,
    AnimeExternalResponse,
    AnimeStreamingResponse
} from "../types/anime";
import JikanResponse from "../types/common";

export class Anime {
    constructor(private client: JikanHttpClient) {}

    getAnimeByFullId(id: number): Promise<JikanResponse<AnimeResponse>> {
        return this.client.get<JikanResponse<AnimeResponse>>(`/anime/${id}`);
    }

    getAnimeCharacters(id: number): Promise<JikanResponse<AnimeCharacterResponse[]>> {
        return this.client.get<JikanResponse<AnimeCharacterResponse[]>>(`/anime/${id}/characters`);
    }

    getAnimeStaff(id: number): Promise<JikanResponse<AnimeStaffResponse[]>> {
        return this.client.get<JikanResponse<AnimeStaffResponse[]>>(`/anime/${id}/staff`);
    }

    getAnimeEpisodes(id: number, page?: number): Promise<JikanResponse<AnimeEpisodeResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<AnimeEpisodeResponse[]>>(`/anime/${id}/episodes${params}`);
    }

    getAnimeEpisodeById(id: number, episodeId: number): Promise<JikanResponse<AnimeEpisodeResponse>> {
        return this.client.get<JikanResponse<AnimeEpisodeResponse>>(`/anime/${id}/episodes/${episodeId}`);
    }

    getAnimeNews(id: number, page?: number): Promise<JikanResponse<AnimeNewsResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<AnimeNewsResponse[]>>(`/anime/${id}/news${params}`);
    }

    getAnimeForum(id: number): Promise<JikanResponse<AnimeForumResponse[]>> {
        return this.client.get<JikanResponse<AnimeForumResponse[]>>(`/anime/${id}/forum`);
    }

    getAnimeVideos(id: number): Promise<JikanResponse<AnimeVideoResponse>> {
        return this.client.get<JikanResponse<AnimeVideoResponse>>(`/anime/${id}/videos`);
    }

    getAnimePictures(id: number): Promise<JikanResponse<AnimePictureResponse[]>> {
        return this.client.get<JikanResponse<AnimePictureResponse[]>>(`/anime/${id}/pictures`);
    }

    getAnimeStatistics(id: number): Promise<JikanResponse<AnimeStatisticsResponse>> {
        return this.client.get<JikanResponse<AnimeStatisticsResponse>>(`/anime/${id}/statistics`);
    }

    getAnimeMoreInfo(id: number): Promise<JikanResponse<{ moreinfo: string }>> {
        return this.client.get<JikanResponse<{ moreinfo: string }>>(`/anime/${id}/moreinfo`);
    }

    getAnimeRecommendations(id: number): Promise<JikanResponse<AnimeRecommendationResponse[]>> {
        return this.client.get<JikanResponse<AnimeRecommendationResponse[]>>(`/anime/${id}/recommendations`);
    }

    getAnimeUserUpdates(id: number, page?: number): Promise<JikanResponse<AnimeUserUpdateResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<AnimeUserUpdateResponse[]>>(`/anime/${id}/userupdates${params}`);
    }

    getAnimeReviews(id: number, page?: number): Promise<JikanResponse<AnimeReviewResponse[]>> {
        const params = page ? `?page=${page}` : '';
        return this.client.get<JikanResponse<AnimeReviewResponse[]>>(`/anime/${id}/reviews${params}`);
    }

    getAnimeRelations(id: number): Promise<JikanResponse<AnimeRelationResponse[]>> {
        return this.client.get<JikanResponse<AnimeRelationResponse[]>>(`/anime/${id}/relations`);
    }

    getAnimeThemes(id: number): Promise<JikanResponse<AnimeThemeResponse>> {
        return this.client.get<JikanResponse<AnimeThemeResponse>>(`/anime/${id}/themes`);
    }

    getAnimeExternal(id: number): Promise<JikanResponse<AnimeExternalResponse[]>> {
        return this.client.get<JikanResponse<AnimeExternalResponse[]>>(`/anime/${id}/external`);
    }

    getAnimeStreaming(id: number): Promise<JikanResponse<AnimeStreamingResponse[]>> {
        return this.client.get<JikanResponse<AnimeStreamingResponse[]>>(`/anime/${id}/streaming`);
    }

    searchAnime(params: {
        q?: string;
        type?: string;
        score?: number;
        min_score?: number;
        max_score?: number;
        status?: string;
        rating?: string;
        sfw?: boolean;
        genres?: string;
        genres_exclude?: string;
        order_by?: string;
        sort?: string;
        letter?: string;
        producer?: string;
        start_date?: string;
        end_date?: string;
        page?: number;
        limit?: number;
    } = {}): Promise<JikanResponse<AnimeResponse[]>> {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        const queryString = queryParams.toString();
        return this.client.get<JikanResponse<AnimeResponse[]>>(`/anime${queryString ? `?${queryString}` : ''}`);
    }

}