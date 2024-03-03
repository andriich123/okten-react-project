export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface IDiscoverParams {
  page?: number;
  with_genres?: string;
}

export interface ISearchParams {
  query: string;
  page?: number;
}
