import { IPaginated } from "../interfaces/common/paginated";
import { IMovie, IDiscoverParams, ISearchParams } from "../interfaces/movie";
import { apiService } from "./apiService";
import { urls } from "../constants/urls";
import { IMovieDetails } from "../interfaces/movie-details";

export const moviesService = {
  discover: (params?: IDiscoverParams) => {
    return apiService.get<IPaginated<IMovie>>(urls.discover.base, { params });
  },

  getById: (id: number) => {
    return apiService.get<IMovieDetails>(urls.movie.byId(id));
  },

  search: (params: ISearchParams) => {
    return apiService.get<IPaginated<IMovie>>(urls.search.base, { params });
  },
};
