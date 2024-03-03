import { useContext } from "react";
import { FavoritesContext } from "../hoc/FavoritesContext";

export const useFavorites = () => useContext(FavoritesContext);
