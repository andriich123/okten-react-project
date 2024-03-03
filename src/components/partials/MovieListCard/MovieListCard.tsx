import { FC, useRef } from "react";
import { IMovie } from "../../../interfaces/movie";
import css from "./MovieListCard.module.scss";
import { useHover } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { FavoritesButton } from "../FavoritesButton";
import { useFavorites } from "../../../hooks/useFavorites";

interface IProps {
  movie: IMovie;
}

const MovieListCard: FC<IProps> = ({ movie }) => {
  const posterRef = useRef<HTMLDivElement>(null);
  const isPosterHover = useHover(posterRef);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const navigate = useNavigate();

  const handlePosterClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  const renderFavoriteButton = () => {
    return (
      <div
        className={css.favoriteButtonWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <FavoritesButton
          className={css.favoriteButton}
          isFavorite={isFavorite(movie.id)}
          onClick={(state) => {
            if (!state) {
              removeFavorite(movie.id);
            } else {
              addFavorite(movie);
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className={css.wrapper}>
      <div
        className={css.posterWrapper}
        ref={posterRef}
        onClick={handlePosterClick}
      >
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
        />

        {isPosterHover && (
          <div className={`${css.overlay}`}>
            <p className={css.overview}>{movie.overview}</p>
          </div>
        )}

        {renderFavoriteButton()}
      </div>

      <span className={css.date}>
        {new Date(movie.release_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>

      <h3 className={css.title}>{movie.title}</h3>

      <div className={css.rating}>
        <StarRatings
          rating={movie.vote_average / 2}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
        />
      </div>
    </div>
  );
};

export { MovieListCard };
