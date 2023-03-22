import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/interfaces/appState.interface';

export const selectSearchState = (state: AppStateInterface) => state.upcomingList;


export const selectUpcomingMovies = createSelector(
  selectSearchState,
  (state) => state.movies
);
