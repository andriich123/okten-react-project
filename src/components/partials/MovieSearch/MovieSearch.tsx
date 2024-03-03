import { useEffect, useState } from "react";
import { useSearchContext } from "../../../hooks/useSearchContext";
import { Input } from "../../common/Input";
import { useDebounceValue } from "usehooks-ts";
import css from "./MovieSearch.module.scss";

const MovieSearch = () => {
  const { setQuery } = useSearchContext();
  const [value, setValue] = useState("");
  const [debouncedValue, setDobouncedValue] = useDebounceValue(value, 300);

  const handleInputChange = (value: string) => {
    setValue(value);
    setDobouncedValue(value);
  };

  useEffect(() => {
    setQuery(debouncedValue);
  }, [debouncedValue]);

  return (
    <Input
      className={css.input}
      placeholder="Search movie"
      onChange={handleInputChange}
      value={value}
    />
  );
};

export { MovieSearch };
