import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as GetTopRatedMoviesActions from './actions'
import { MovieService } from 'src/app/shared/services/movie.service';

@Injectable()
export class TopRatedMoviesEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  getTopRatedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetTopRatedMoviesActions.getTopRatedMovies),
      switchMap(() => {
        return this.movieService.getTopRatedMovies().pipe(
					mergeMap(topRatedMoviesResponse => this.movieService.getTopRatedMovies2().pipe(map((topRatedMoviesResponse2) => {
						return {
							page: topRatedMoviesResponse2.page,
							results: [...topRatedMoviesResponse.results, ...topRatedMoviesResponse2.results],
							total_pages: topRatedMoviesResponse2.total_pages,
							total_results: topRatedMoviesResponse2.total_results
						}
					}))),
					map((data) => GetTopRatedMoviesActions.getTopRatedMoviesSuccess({movies: data.results})),
          catchError((error) => of(GetTopRatedMoviesActions.getTopRatedMoviesFailure({ error })))
        ) }
      )
    )
  );
}