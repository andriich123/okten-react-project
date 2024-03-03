const baseURL = "https://api.themoviedb.org/3";

const discover = "/discover/movie";
const movie = "/movie";
const genres = "/genre/movie/list";
const search = "/search/movie";

const urls = {
  discover: { base: discover },
  movie: { base: movie, byId: (id: number) => `${movie}/${id}` },
  genres: { base: genres },
  search: { base: search },
};

export { baseURL, urls };
