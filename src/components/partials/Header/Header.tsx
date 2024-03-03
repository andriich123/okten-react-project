import { Link } from "react-router-dom";
import { UserInfo } from "../UserInfo";
import { ThemeToggle } from "../ThemeToggle";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <div className={css.links}>
        <Link to="/movies">Home</Link>
        <Link to="/genre">Genres</Link>
        <Link to="/favorites">Favorite movies</Link>
      </div>
      <div className={css.actions}>
        <UserInfo />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
