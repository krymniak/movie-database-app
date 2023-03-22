import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/interfaces/appState.interface';

export const selectSearchState = (state: AppStateInterface) => state.topRatedList;


export const selectTopRatedMovies = createSelector(
  selectSearchState,
  (state) => state.movies
);
