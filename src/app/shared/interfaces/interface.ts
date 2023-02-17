export interface SearchMovie {
		poster_path: string | null;
		adult: boolean;
		overview: string;
		release_date: string;
		genre_ids: number[];
		id: number;
		original_title: string;
		original_language: string;
		title: string;
		backdrop_path: string | null;
		popularity: number;
		vote_count: number;
		video: boolean;
		vote_average: number;
	
}

export interface SearchMovieResponse {
	page: number;
	results: SearchMovie[];
	total_pages: number;
	total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}