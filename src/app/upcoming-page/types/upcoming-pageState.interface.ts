import { SearchMovie } from "src/app/shared/interfaces/interface";

export interface UpcomingPageStateInterface {
  movies: SearchMovie[],
  loading: boolean,
  error: string | null
}