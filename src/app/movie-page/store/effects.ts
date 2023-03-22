import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as GetMoviesActions from './actions'
import { MovieService } from 'src/app/shared/services/movie.service';

@Injectable()
export class GetMovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetMoviesActions.getMovie),
      switchMap(action => {
        return this.movieService.getMovieDetails(action.query).pipe(
          map((response) => GetMoviesActions.getMovieSuccess({ movie: response })),
          catchError((error) => of(GetMoviesActions.getMovieFailure({ error })))
        ) }
      )
    )
  );

	getVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetMoviesActions.getVideo),
      switchMap(action => {
				console.log(action.movieId)
        return this.movieService.getVideo(action.movieId).pipe(
          map((response) => GetMoviesActions.getVideoSuccess({ video: response.results })),
          catchError((error) => of(GetMoviesActions.getVideoFailure({ error })))
        ) }
      )
    )
  );

	getImages$ = createEffect(() =>
	this.actions$.pipe(
		ofType(GetMoviesActions.getImages),
		switchMap(action => {
			return this.movieService.getImages(action.movieId).pipe(
				map((response) => GetMoviesActions.getImagesSuccess({ images: response.posters })),
				catchError((error) => of(GetMoviesActions.getImagesFailure({ error })))
			) }
		)
	)
	);

	getRecomendations$ = createEffect(() =>
	this.actions$.pipe(
		ofType(GetMoviesActions.getRecomendations),
		switchMap(action => {
			return this.movieService.getRecommendations(action.movieId).pipe(
				map((response) => GetMoviesActions.getRecomendationsSuccess({ recomendations: response.results })),
				catchError((error) => of(GetMoviesActions.getRecomendationsFailure({ error })))
			) }
		)
	)
);
}