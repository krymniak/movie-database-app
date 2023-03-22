import { createReducer, on } from '@ngrx/store';
import { MoviePageStateInterface } from '../types/movie-pageState.interface';
import * as GetMoviesActions from './actions'

export const initialState: MoviePageStateInterface = {
	recomendations: [],
	images: [],
	video: [],
	movie: null,
	loading: false,
	error: null
};

export const getMovieReducer = createReducer(
  initialState,
  on(GetMoviesActions.getMovie, (state, action) => ({
    ...state,
		query: action.query,
    loading: true,
    error: null
  })),

  on(GetMoviesActions.getMovieSuccess, (state, action) => ({
    ...state,
		movie: action.movie

  })),

  on(GetMoviesActions.getMovieFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  })),



	on(GetMoviesActions.getVideo, (state, action) => ({
    ...state,
		movieId: action.movieId,
    error: null
  })),

  on(GetMoviesActions.getVideoSuccess, (state, action) => ({
    ...state,
		video: action.video

  })),

  on(GetMoviesActions.getVideoFailure, (state, action) => ({
    ...state,
    error: action.error
  })),



	on(GetMoviesActions.getImages, (state, action) => ({
    ...state,
		movieId: action.movieId,
    error: null
  })),

  on(GetMoviesActions.getImagesSuccess, (state, action) => ({
    ...state,
		images: action.images

  })),

  on(GetMoviesActions.getImagesFailure, (state, action) => ({
    ...state,
    error: action.error
  })),



	on(GetMoviesActions.getRecomendations, (state, action) => ({
    ...state,
		movieId: action.movieId,
    error: null
  })),

  on(GetMoviesActions.getRecomendationsSuccess, (state, action) => ({
    ...state,
		recomendations: action.recomendations

  })),

  on(GetMoviesActions.getRecomendationsFailure, (state, action) => ({
    ...state,
    error: action.error
  }))


);