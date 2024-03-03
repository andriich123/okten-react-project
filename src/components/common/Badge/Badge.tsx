import { FC } from "react";
import css from "./Badge.module.scss";

interface IProps {
  className?: string;
  label: string;
}

const Badge: FC<IProps> = ({ className, label }) => {
  return (
    <div className={`${css.wrapper} ${className}`}>
      <span>{label}</span>
    </div>
  );
};

export { Badge };
