import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { IMovie } from "../interfaces/movie";

interface IFavoritesContext {
  favorites: IMovie[];
  addFavorite: (movie: IMovie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  addFavorite: (movie: IMovie) => {},
  removeFavorite: (id: number) => {},
  isFavorite: (id: number) => false,
});

const FavoritesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<IMovie[]>([]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: IMovie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const isFavorite = (id: number) => {
    return !!favorites.some((movie) => movie.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
export type { IFavoritesContext };
