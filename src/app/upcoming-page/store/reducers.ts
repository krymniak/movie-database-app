import { createReducer, on } from '@ngrx/store';
import { UpcomingPageStateInterface } from '../types/upcoming-pageState.interface';
import * as GetUpcomingMoviesActions from './actions'

export const initialState: UpcomingPageStateInterface = {
	movies: [],
	loading: false,
	error: null
};

export const getUpcomingMoviesReducer = createReducer(
  initialState,
  on(GetUpcomingMoviesActions.getUpcomingMovies, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(GetUpcomingMoviesActions.getUpcomingMoviesSuccess, (state, action) => ({
    ...state,
		movies: action.movies

  })),

  on(GetUpcomingMoviesActions.getUpcomingMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
);