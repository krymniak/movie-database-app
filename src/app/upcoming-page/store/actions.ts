import { createAction, props } from '@ngrx/store';
import { SearchMovie } from 'src/app/shared/interfaces/interface';


export const getUpcomingMovies = createAction(
  '[Upcoming Page] Get Upcoming Movies'
);

export const getUpcomingMoviesSuccess = createAction(
  '[Movie Service] Get Upcoming Movies Success',
  props<{ movies: SearchMovie[] }>()
);

export const getUpcomingMoviesFailure = createAction(
  '[Movie Service] Get Upcoming Movies Failure',
  props<{ error: string }>()
);