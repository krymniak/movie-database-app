import { createReducer, on } from '@ngrx/store';
import { SearchPageStateInterface } from '../types/search-pageState.interface';
import * as SearchMoviesActions from './actions'

export const initialState: SearchPageStateInterface = {
	movies: [],
	loading: false,
	error: null
};

export const searchReducer = createReducer(
  initialState,
  on(SearchMoviesActions.searchMovies, (state, action) => ({
    ...state,
		query: action.query,
    loading: true,
    error: null
  })),

  on(SearchMoviesActions.searchMoviesSuccess, (state, action) => ({
    ...state,
		movies: action.movies

  })),

  on(SearchMoviesActions.searchMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
);