import { FC } from "react";
import css from "./Input.module.scss";

interface IProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: FC<IProps> = ({
  className = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
}) => {
  return (
    <input
      className={`${className} ${css.input}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export { Input };
