import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as SearchMoviesActions from './actions'
import { MovieService } from 'src/app/shared/services/movie.service';
import { SearchMovieResponse } from 'src/app/shared/interfaces/interface';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchMoviesActions.searchMovies),
      switchMap(action => {
        return this.movieService.searchMovies(action.query).pipe(
          map((response: SearchMovieResponse) => SearchMoviesActions.searchMoviesSuccess({ movies: response.results })),
          catchError((error) => of(SearchMoviesActions.searchMoviesFailure({ error })))
        ) }
      )
    )
  );
}