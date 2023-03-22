import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as GetPopularMoviesActions from './actions'
import { MovieService } from 'src/app/shared/services/movie.service';

@Injectable()
export class PopularMoviesEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  getPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetPopularMoviesActions.getPopularMovies),
      switchMap(() => {
        return this.movieService.getPopularMovies().pipe(
					mergeMap(popularMoviesResponse => this.movieService.getPopularMovies2().pipe(map((popularMoviesResponse2) => {
						return {
							page: popularMoviesResponse2.page,
							results: [...popularMoviesResponse.results, ...popularMoviesResponse2.results],
							total_pages: popularMoviesResponse2.total_pages,
							total_results: popularMoviesResponse2.total_results
						}
					}))),
					map((data) => GetPopularMoviesActions.getPopularMoviesSuccess({movies: data.results})),
          catchError((error) => of(GetPopularMoviesActions.getPopularMoviesFailure({ error })))
        ) }
      )
    )
  );
}