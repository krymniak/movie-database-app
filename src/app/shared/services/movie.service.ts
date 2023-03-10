import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Images, Movie, MovieVideo, SearchMovie, SearchMovieResponse, Video } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'f4b731afdefbc2e93b0b7bc91d1b7685';
  private baseUrl = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient) { }


  getPopularMovies(): Observable<SearchMovieResponse> {
    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en&page=1`);
  }

	getPopularMovies2(): Observable<SearchMovieResponse> {
    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en&page=2`);
  }

	getTopRatedMovies(): Observable<SearchMovieResponse> {
    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en&page=1`);
  }

	getTopRatedMovies2(): Observable<SearchMovieResponse> {
    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en&page=2`);
  }

	getUpcomingMovies(): Observable<SearchMovieResponse> {
    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&language=en&page=1`);
  }

	getUpcomingMovies2(): Observable<SearchMovieResponse> {
    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&language=en&page=2`);
  }

	searchMovies(query: string | null): Observable<SearchMovieResponse> {
		return this.http.get<SearchMovieResponse>(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
	}

	getMovieDetails(movieId: string | null): Observable<Movie> {
		return this.http.get<Movie>(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`);
	}

	getVideo(movieId: number | null): Observable<MovieVideo> {
		return this.http.get<MovieVideo>(`${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`);
	}

	getImages(movieId: number | null): Observable<Images> {
		return this.http.get<Images>(`${this.baseUrl}/movie/${movieId}/images?api_key=${this.apiKey}&language=en`);
	}

	getRecommendations(movieId: number | null): Observable<SearchMovieResponse> {
		return this.http.get<SearchMovieResponse>(`${this.baseUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey}&language=en`);
	}
}