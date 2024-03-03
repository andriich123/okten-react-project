import { FC } from "react";
import { IMovie } from "../../../interfaces/movie";
import { PosterPreview } from "../PosterPreview";
import { StarsRating } from "../../common/StarsRating";
import css from "./MovieListCard.module.scss";

interface IProps {
  movie: IMovie;
}

const MovieListCard: FC<IProps> = ({ movie }) => {
  return (
    <div className={css.wrapper}>
      <PosterPreview movie={movie} />

      <span className={css.date}>
        {new Date(movie.release_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>

      <h3 className={css.title}>{movie.title}</h3>

      <div className={css.rating}>
        <StarsRating
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
