import { SearchMovie } from "src/app/shared/interfaces/interface";

export interface TopRatedPageStateInterface {
  movies: SearchMovie[],
  loading: boolean,
  error: string | null
}