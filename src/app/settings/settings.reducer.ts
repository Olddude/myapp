import { createReducer, on } from '@ngrx/store';
import type { SettingsState } from '@myapp/types';
import * as SettingsActions from './settings.actions';

export const initialSettingsState: SettingsState = {
  theme: 'light',
  language: 'en',
  notifications: true,
};

export const settingsReducer = createReducer(
  initialSettingsState,
  on(SettingsActions.setTheme, (state, { theme }) => ({
    ...state,
    theme,
  })),
  on(SettingsActions.setLanguage, (state, { language }) => ({
    ...state,
    language,
  })),
  on(SettingsActions.toggleNotifications, (state) => ({
    ...state,
    notifications: !state.notifications,
  })),
  on(SettingsActions.resetSettings, () => initialSettingsState)
);