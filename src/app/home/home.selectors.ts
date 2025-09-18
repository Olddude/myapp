import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '.';

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectTheme = createSelector(
  selectHomeState,
  (state: HomeState) => state.theme
);

export const selectLanguage = createSelector(
  selectHomeState,
  (state: HomeState) => state.language
);

export const selectNotifications = createSelector(
  selectHomeState,
  (state: HomeState) => state.notifications
);

export const selectAllSettings = createSelector(
  selectHomeState,
  (state: HomeState) => state
);