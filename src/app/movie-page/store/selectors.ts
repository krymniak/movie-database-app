import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/interfaces/appState.interface';

export const selectGetMovieState = (state: AppStateInterface) => state.moviePage;


export const selectGetMovie = createSelector(
  selectGetMovieState,
  (state) => state.movie
);

export const selectGetVideo = createSelector(
  selectGetMovieState,
  (state) => state.video
);

export const selectGetImages = createSelector(
  selectGetMovieState,
  (state) => state.images
);

export const selectGetRecomendations = createSelector(
  selectGetMovieState,
  (state) => state.recomendations
);


