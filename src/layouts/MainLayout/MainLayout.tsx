import { Outlet } from "react-router-dom";
import css from "./MainLayout.module.scss";
import Header from "../../components/partials/Header";
import { SearchProvider } from "../../hoc/SearchProvider";
import { FavoritesProvider } from "../../hoc/FavoritesContext";

const MainLayout = () => {
  return (
    <SearchProvider>
      <FavoritesProvider>
        <div className={css.container}>
          <Header />
          <Outlet />
        </div>
      </FavoritesProvider>
    </SearchProvider>
  );
};

export { MainLayout };
