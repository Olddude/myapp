import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsState } from '../app.state';

export const selectSettingsState = createFeatureSelector<SettingsState>('settings');

export const selectTheme = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.theme
);

export const selectLanguage = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.language
);

export const selectNotifications = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.notifications
);

export const selectAllSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);