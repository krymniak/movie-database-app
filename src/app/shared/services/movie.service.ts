import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie, SearchMovie, SearchMovieResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'f4b731afdefbc2e93b0b7bc91d1b7685';
  private baseUrl = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient) { }


  getPopularMovies() {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

	searchMovies(query: string | null): Observable<SearchMovieResponse> {
		return this.http.get<SearchMovieResponse>(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
	}

	getMovieDetails(movieId: string | null): Observable<Movie> {
		return this.http.get<Movie>(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`);
	}
}