import { Movie, Poster, SearchMovie, Video } from "src/app/shared/interfaces/interface";

export interface MoviePageStateInterface {
  recomendations: SearchMovie[],
	images: Poster[],
	video: Video[],
	movie: Movie | null,
  loading: boolean,
  error: string | null
}