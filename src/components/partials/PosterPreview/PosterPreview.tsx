import { FC, useRef } from "react";
import { IMovie } from "../../../interfaces/movie";
import { useHover } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../../hooks/useFavorites";
import { FavoritesButton } from "../FavoritesButton";
import css from "./PosterPreview.module.scss";

interface IProps {
  movie: IMovie;
}

const PosterPreview: FC<IProps> = ({ movie }) => {
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
    <div
      className={css.posterWrapper}
      ref={posterRef}
      onClick={handlePosterClick}
    >
      <img
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
  );
};

export { PosterPreview };
