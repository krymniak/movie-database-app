import { createAction, props } from '@ngrx/store';
import { SearchMovie } from 'src/app/shared/interfaces/interface';


export const getPopularMovies = createAction(
  '[Popular Page] Get Popular Movies'
);

export const getPopularMoviesSuccess = createAction(
  '[Movie Service] Get Popular Movies Success',
  props<{ movies: SearchMovie[] }>()
);

export const getPopularMoviesFailure = createAction(
  '[Movie Service] Get Popular Movies Failure',
  props<{ error: string }>()
);