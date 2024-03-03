import { useContext } from "react";
import { ThemeContext } from "../hoc/ThemeProvide";

export const useThemeContext = () => useContext(ThemeContext);
