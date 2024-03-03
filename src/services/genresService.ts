import { apiService } from "./apiService";
import { urls } from "../constants/urls";
import { IGenre } from "../interfaces/genre";

export const genresService = {
  getAll: async () => {
    const { data } = await apiService.get(urls.genres.base);
    return { data: data.genres } as { data: IGenre[] };
  },
};
