import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/interfaces/appState.interface';

export const selectSearchState = (state: AppStateInterface) => state.movieList;


export const selectSearchMovies = createSelector(
  selectSearchState,
  (state) => state.movies
);
