import { FC, useEffect, useState } from "react";
import { IGenre } from "../../../interfaces/genre";
import { genresService } from "../../../services/genresService";
import { Dropdown } from "../../common/Dropdown";
import css from "./GenresDropdown.module.scss";

interface IProps {
  className?: string;
  onChange: (id?: number) => void;
  id?: number;
}

const GenresDropdown: FC<IProps> = ({ className, onChange, id }) => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    genresService
      .getAll()
      .then(({ data: genres }) => setGenres(genres))
      .catch(console.log);
  }, []);

  const genresSelectOptions = genres.map((genre) => ({
    label: genre.name,
    value: genre.id.toString(),
  }));

  const handleSelect = (newValue: string) => {
    onChange?.(newValue ? Number(newValue) : undefined);
  };

  return (
    <Dropdown
      className={css.dropdown}
      options={genresSelectOptions}
      value={id?.toString() || ""}
      onChange={handleSelect}
    />
  );
};

export { GenresDropdown as Dropdown };
