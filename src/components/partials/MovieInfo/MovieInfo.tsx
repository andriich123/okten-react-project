import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { moviesService } from "../../../services/moviesService";
import { IMovieDetails } from "../../../interfaces/movie-details";

import css from "./MovieInfo.module.scss";
import { ProductionCompanies } from "./ProductionCompanies/ProductionCompanies";
import { Badge } from "../../common/Badge";

const MovieInfo = () => {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    moviesService
      .getById(Number(movieId))
      .then(({ data }) => setMovie(data))
      .catch(() => navigate("/not-found"))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.posterWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Poster"
            className={css.poster}
          />

          <div className={css.badgeGenres}>
            {movie.genres.map((genre) => (
              <Link key={genre.id} to={`/genre/${genre.id}`}>
                <Badge label={genre.name} />
              </Link>
            ))}
          </div>
        </div>

        <div className={css.info}>
          <h1 className={css.title}>{movie.title}</h1>
          <div className={css.meta}>
            <p>{new Date(movie.release_date).toLocaleDateString()}</p> |{" "}
            <span>{movie.runtime} mins</span>
            <span>${movie.budget}</span>
          </div>
          <h2 className={css.overviewTitle}>Overview</h2>
          <p className={css.overview}>{movie.overview}</p>

          <div className={css.listDetailsWrapper}>
            <div className={css.listDetails}>
              <span className={css.listDetailsTitle}>Genres </span>
              <span className={css.listDetailsValue}>
                {movie.genres.map((genre, idx) => (
                  <Link key={genre.id} to={`/genre/${genre.id}`}>
                    {genre.name}
                    {idx !== movie.genres.length - 1 ? ", " : ""}
                  </Link>
                ))}
              </span>
            </div>

            <div className={css.listDetails}>
              <span className={css.listDetailsTitle}>Production Companies</span>
              <span className={css.listDetailsValue}>
                {movie.production_companies
                  .map((company) => company.name)
                  .join(", ")}
              </span>
            </div>

            <div className={css.listDetails}>
              <span className={css.listDetailsTitle}>Languages</span>
              <span className={css.listDetailsValue}>
                {movie.spoken_languages
                  .map((language) => language.name)
                  .join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={css.productionCompanies}>
        <h2>Production Companies</h2>
        <ProductionCompanies companies={movie.production_companies} />
      </div>
    </div>
  );
};

export { MovieInfo };
