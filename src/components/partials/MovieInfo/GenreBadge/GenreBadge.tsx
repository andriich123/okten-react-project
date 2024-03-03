import { FC } from "react";
import { IGenre } from "../../../../interfaces/genre";
import { Link } from "react-router-dom";
import { Badge } from "../../../common/Badge";
import css from "./GenreBadge.module.scss";

interface IProps {
  genres: IGenre[];
}

const GenreBadge: FC<IProps> = ({ genres }) => {
  return (
    <div className={css.badgeGenres}>
      {genres.map((genre) => (
        <Link key={genre.id} to={`/genre/${genre.id}`}>
          <Badge label={genre.name} />
        </Link>
      ))}
    </div>
  );
};

export { GenreBadge };
