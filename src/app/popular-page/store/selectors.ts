import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/interfaces/appState.interface';

export const selectSearchState = (state: AppStateInterface) => state.popularList;


export const selectPopularMovies = createSelector(
  selectSearchState,
  (state) => state.movies
);
