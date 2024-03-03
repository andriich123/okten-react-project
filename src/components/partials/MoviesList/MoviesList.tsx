import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IMovie } from "../../../interfaces/movie";
import { moviesService } from "../../../services/moviesService";
import { MovieListCard } from "../MovieListCard";
import Pagination from "../../common/Pagination/Pagination";
import { IPaginated } from "../../../interfaces/common/paginated";
import { useSearchContext } from "../../../hooks/useSearchContext";
import { MovieSearch } from "../MovieSearch";
import css from "./MoviesList.module.scss";
import { NoData } from "../NoData";

const MoviesList = () => {
  const [moviesData, setMovies] = useState<IPaginated<IMovie> | null>(null);
  const navigate = useNavigate();
  const { query: search } = useSearchContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPageParam = Number(searchParams.get("page")) || 1;
  const searchParam = searchParams.get("search") ?? undefined;

  useEffect(() => {
    if (searchParam) {
      moviesService
        .search({ query: searchParam, page: currentPageParam })
        .then(({ data }) => setMovies(data));

      return;
    }

    moviesService
      .discover({ page: currentPageParam })
      .then(({ data }) => setMovies(data))
      .catch(() => navigate("/not-found"));
  }, [searchParam, currentPageParam]);

  useEffect(() => {
    if (search) {
      setSearchParams({ search });
    }
  }, [search]);

  const handlePageChange = (page: number) => {
    let searchParams: Record<string, string> = { page: String(page) };

    if (searchParam) {
      searchParams = { ...searchParams, search: searchParam };
    }

    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className={css.search}>
        <MovieSearch />
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

export { MoviesList };
