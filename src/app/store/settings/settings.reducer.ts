import { createReducer, on } from '@ngrx/store';
import { SettingsState, initialSettingsState } from '../app.state';
import * as SettingsActions from './settings.actions';

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