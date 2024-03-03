import { useContext } from "react";
import { SearchContext } from "../hoc/SearchProvider";

export const useSearchContext = () => useContext(SearchContext);
