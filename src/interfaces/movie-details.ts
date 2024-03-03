import { ICollection } from "./collection";
import { ICompany } from "./company";
import { ICountry } from "./country";
import { IGenre } from "./genre";
import { ILanguage } from "./language";
import { IMovie } from "./movie";

export interface IMovieDetails extends IMovie {
  belongs_to_collection: ICollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  imdb_id: string;
  production_companies: ICompany[];
  production_countries: ICountry[];
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
}
