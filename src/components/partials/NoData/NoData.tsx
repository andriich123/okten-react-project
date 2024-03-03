import { FC } from "react";
import css from "./NoData.module.scss";

interface IProps {
  className?: string;
  text?: string;
}

const NoData: FC<IProps> = ({ className = "", text = "No data available" }) => {
  return (
    <div className={`${className} ${css.wrapper}`}>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export { NoData };
