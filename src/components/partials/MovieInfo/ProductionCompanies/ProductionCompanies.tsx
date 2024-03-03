import { FC } from "react";
import { ICompany } from "../../../../interfaces/company";
import css from "./ProductionCompanies.module.scss";
import { useThemeContext } from "../../../../hooks/useThemeContext";

interface IProps {
  companies: ICompany[];
}

const ProductionCompanies: FC<IProps> = ({ companies }) => {
  const { theme } = useThemeContext();

  return (
    <div className={css.wrapper}>
      {companies.map((company) => (
        <div
          key={company.id}
          className={css.company}
          style={{ backgroundColor: theme === "dark" ? "#114a57" : "#efefef" }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
            alt={company.name}
            className={css.logo}
          />
          <span>{company.name}</span>
        </div>
      ))}
    </div>
  );
};

export { ProductionCompanies };
