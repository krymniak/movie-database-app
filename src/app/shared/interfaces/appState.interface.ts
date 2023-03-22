import { MoviePageStateInterface } from "src/app/movie-page/types/movie-pageState.interface";
import { PopularPageStateInterface } from "src/app/popular-page/types/popular-pageState.interface";
import { SearchPageStateInterface } from "src/app/search-page/types/search-pageState.interface";
import { TopRatedPageStateInterface } from "src/app/top-rated-page/types/top-rated-pageState.interface";
import { UpcomingPageStateInterface } from "src/app/upcoming-page/types/upcoming-pageState.interface";

export interface AppStateInterface {
	movieList: SearchPageStateInterface,
	moviePage: MoviePageStateInterface,
	popularList: PopularPageStateInterface,
	topRatedList: TopRatedPageStateInterface,
	upcomingList: UpcomingPageStateInterface
}