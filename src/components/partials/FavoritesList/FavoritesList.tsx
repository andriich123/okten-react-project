import { useFavorites } from "../../../hooks/useFavorites";
import { NoData } from "../NoData";
import css from "./FavoritesList.module.scss";
import { MovieListCard } from "../MovieListCard";

const FavoritesList = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      {favorites.length === 0 && <NoData text="Favorites list is empty" />}

      {favorites.length > 0 && (
        <div className={css.wrapper}>
          {favorites.map((movie) => (
            <MovieListCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export { FavoritesList };
