import { SearchMovie } from "src/app/shared/interfaces/interface";

export interface PopularPageStateInterface {
  movies: SearchMovie[],
  loading: boolean,
  error: string | null
}