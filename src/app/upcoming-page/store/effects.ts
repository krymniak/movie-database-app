import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as GetUpcomingMoviesActions from './actions'
import { MovieService } from 'src/app/shared/services/movie.service';

@Injectable()
export class UpcomingMoviesEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  getUpcomingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetUpcomingMoviesActions.getUpcomingMovies),
      switchMap(() => {
        return this.movieService.getUpcomingMovies().pipe(
					mergeMap(upcomingMoviesResponse => this.movieService.getUpcomingMovies2().pipe(map((upcomingMoviesResponse2) => {
						return {
							page: upcomingMoviesResponse2.page,
							results: [...upcomingMoviesResponse.results, ...upcomingMoviesResponse2.results],
							total_pages: upcomingMoviesResponse2.total_pages,
							total_results: upcomingMoviesResponse2.total_results
						}
					}))),
					map((data) => GetUpcomingMoviesActions.getUpcomingMoviesSuccess({movies: data.results})),
          catchError((error) => of(GetUpcomingMoviesActions.getUpcomingMoviesFailure({ error })))
        ) }
      )
    )
  );
}