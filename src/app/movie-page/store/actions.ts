import { createAction, props } from '@ngrx/store';
import { Movie, Poster, SearchMovie, Video } from 'src/app/shared/interfaces/interface';


export const getMovie = createAction(
  '[Movie Page] Get Movie',
  props<{ query: string | null}>()
);

export const getMovieSuccess = createAction(
  '[Movie Service] Get Movie Success',
  props<{ movie: Movie }>()
);

export const getMovieFailure = createAction(
  '[Movie Service] Get Movie Failure',
  props<{ error: string }>()
);


export const getVideo = createAction(
  '[Movie Page] Get Video',
  props<{ movieId: number | null }>()
);

export const getVideoSuccess = createAction(
  '[Movie Service] Get Video Success',
  props<{ video: Video[] }>()
);

export const getVideoFailure = createAction(
  '[Movie Service] Get Video Failure',
  props<{ error: string }>()
);


export const getImages = createAction(
  '[Movie Page] Get Images',
  props<{ movieId: number | null }>()
);

export const getImagesSuccess = createAction(
  '[Movie Service] Get Images Success',
  props<{ images: Poster[] }>()
);

export const getImagesFailure = createAction(
  '[Movie Service] Get Images Failure',
  props<{ error: string }>()
);


export const getRecomendations = createAction(
  '[Movie Page] Get Recomendations',
  props<{ movieId: number | null }>()
);

export const getRecomendationsSuccess = createAction(
  '[Movie Service] Get Recomendations Success',
  props<{ recomendations: SearchMovie[] }>()
);

export const getRecomendationsFailure = createAction(
  '[Movie Service] Get Recomendations Failure',
  props<{ error: string }>()
);

