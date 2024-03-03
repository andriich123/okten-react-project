import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IPaginated } from "../../../interfaces/common/paginated";
import { IMovie } from "../../../interfaces/movie";
import { MovieListCard } from "../MovieListCard";
import Pagination from "../../common/Pagination/Pagination";
import { moviesService } from "../../../services/moviesService";
import css from "./GenreMoviesList.module.scss";
import { Dropdown as GenresDropdown } from "../GenresDropdown";
import { NoData } from "../NoData";

const GenreMoviesList = () => {
  const { id: genreParamId } = useParams();
  const navigate = useNavigate();

  const [moviesData, setMovies] = useState<IPaginated<IMovie> | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPageParam = Number(searchParams.get("page")) || 1;

  const handleGenreChange = (genreId?: number) => {
    navigate(`/genre/${genreId}`);
  };

  useEffect(() => {
    if (genreParamId) {
      moviesService
        .discover({ with_genres: genreParamId, page: currentPageParam })
        .then(({ data }) => setMovies(data))
        .catch(() => navigate("/not-found"));
    } else {
      moviesService
        .discover({ page: currentPageParam })
        .then(({ data }) => setMovies(data))
        .catch(() => navigate("/not-found"));
    }
  }, [genreParamId, currentPageParam]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  return (
    <div>
      <div className={css.genresDropdown}>
        <GenresDropdown
          id={genreParamId ? Number(genreParamId) : undefined}
          onChange={handleGenreChange}
        />
      </div>

      {!moviesData ||
        (moviesData?.results.length === 0 && <NoData text="No movies found" />)}

      {moviesData && moviesData?.results.length > 0 && (
        <>
          <div className={css.wrapper}>
            {moviesData?.results.map((movie) => (
              <MovieListCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div className={css.pagination}>
            <Pagination
              totalPages={moviesData?.total_pages || 0}
              currentPage={currentPageParam}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export { GenreMoviesList };
