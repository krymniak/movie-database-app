import { createAction, props } from '@ngrx/store';
import { SearchMovie } from 'src/app/shared/interfaces/interface';


export const searchMovies = createAction(
  '[Search Page] Search Movies',
  props<{ query: string | null}>()
);

export const searchMoviesSuccess = createAction(
  '[Movie Service] Search Movies Success',
  props<{ movies: SearchMovie[] }>()
);

export const searchMoviesFailure = createAction(
  '[Movie Service] Search Movies Failure',
  props<{ error: string }>()
);