import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/interfaces/appState.interface';
import { SearchPageStateInterface } from '../types/search-pageState.interface';

export const selectSearchState = (state: AppStateInterface) => state.movieList;


export const selectSearchMovies = createSelector(
  selectSearchState,
  (state) => {
    console.log('selector state:', state); // add this line
    return state.movies;
  }
);

export const selectSearchLoading = createSelector(
  selectSearchState,
  (state) => state.loading
);

export const selectSearchError = createSelector(
  selectSearchState,
  (state) => state.error
);
