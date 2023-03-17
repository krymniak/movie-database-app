import { SearchMovie } from "src/app/shared/interfaces/interface";

export interface SearchPageStateInterface {
  movies: SearchMovie[],
  loading: boolean,
  error: string | null
}