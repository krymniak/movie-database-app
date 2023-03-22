import { createReducer, on } from '@ngrx/store';
import { PopularPageStateInterface } from '../types/popular-pageState.interface';
import * as GetpopularMoviesActions from './actions'

export const initialState: PopularPageStateInterface = {
	movies: [],
	loading: false,
	error: null
};

export const getPopularMoviesReducer = createReducer(
  initialState,
  on(GetpopularMoviesActions.getPopularMovies, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(GetpopularMoviesActions.getPopularMoviesSuccess, (state, action) => ({
    ...state,
		movies: action.movies

  })),

  on(GetpopularMoviesActions.getPopularMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
);