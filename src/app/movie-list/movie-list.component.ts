import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies$!: Observable<any>

  constructor(private movieService: MovieService) { }

  onGetNewMovies() {
    this.movies$ = this.movieService.getPopularMovies().
		pipe(
			map((data: any) => data.results)
		);
  }
}