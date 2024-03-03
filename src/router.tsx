import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { MoviesPage } from "./pages/MoviesPage";
import { MovieInfoPage } from "./pages/MovieInfoPage";
import { GenreMoviesPage } from "./pages/GenreMoviesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { FavoritesPage } from "./pages/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/movies" /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:id", element: <MovieInfoPage /> },
      { path: "genre", element: <GenreMoviesPage /> },
      { path: "genre/:id", element: <GenreMoviesPage /> },
      { path: "not-found", element: <NotFoundPage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
