import { FC } from "react";
import css from "./Dropdown.module.scss";

interface IProps {
  className?: string;
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
  value?: string;
}

const Dropdown: FC<IProps> = ({ options, onChange, value, className }) => {
  return (
    <select
      className={`${css.select} ${className || ""}`}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
    >
      <>
        <option value="" className={css.option}>
          -
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={css.option}
          >
            {option.label}
          </option>
        ))}
      </>
    </select>
  );
};

export { Dropdown };
