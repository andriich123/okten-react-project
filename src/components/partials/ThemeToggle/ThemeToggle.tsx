import { useEffect } from "react";
import { useThemeContext } from "../../../hooks/useThemeContext";
import { Moon, Sun } from "../../icons";
import css from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (theme === "light") {
    return (
      <Sun
        className={css.icon}
        onClick={toggleTheme}
        color="#e7cb0f"
        size={30}
      />
    );
  }

  if (theme === "dark") {
    return <Moon className={css.icon} onClick={toggleTheme} size={30} />;
  }

  return null;
};

export { ThemeToggle };
