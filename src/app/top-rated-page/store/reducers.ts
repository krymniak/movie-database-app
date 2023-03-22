import { createReducer, on } from '@ngrx/store';
import { TopRatedPageStateInterface } from '../types/top-rated-pageState.interface';
import * as GetTopRatedMoviesActions from './actions'

export const initialState: TopRatedPageStateInterface = {
	movies: [],
	loading: false,
	error: null
};

export const getTopRatedMoviesReducer = createReducer(
  initialState,
  on(GetTopRatedMoviesActions.getTopRatedMovies, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(GetTopRatedMoviesActions.getTopRatedMoviesSuccess, (state, action) => ({
    ...state,
		movies: action.movies

  })),

  on(GetTopRatedMoviesActions.getTopRatedMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
);