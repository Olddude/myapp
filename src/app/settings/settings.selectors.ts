import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { SettingsState } from '@myapp/types';

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