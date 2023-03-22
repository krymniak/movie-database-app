import { createAction, props } from '@ngrx/store';
import { SearchMovie } from 'src/app/shared/interfaces/interface';


export const getTopRatedMovies = createAction(
  '[TopRated Page] Get TopRated Movies'
);

export const getTopRatedMoviesSuccess = createAction(
  '[Movie Service] Get TopRated Movies Success',
  props<{ movies: SearchMovie[] }>()
);

export const getTopRatedMoviesFailure = createAction(
  '[Movie Service] Get TopRated Movies Failure',
  props<{ error: string }>()
);