import { MoviePageStateInterface } from "src/app/movie-page/types/movie-pageState.interface";
import { SearchPageStateInterface } from "src/app/search-page/types/search-pageState.interface";

export interface AppStateInterface {
	movieList: SearchPageStateInterface,
	moviePage: MoviePageStateInterface
}