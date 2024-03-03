import { FC, PropsWithChildren, createContext, useState } from "react";

interface ISearchContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<ISearchContext>({
  query: "",
  setQuery: () => {},
});

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
export type { ISearchContext };
