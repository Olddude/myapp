import { createReducer, on } from '@ngrx/store';
import type { HomeState } from '@myapp/types';
import * as HomeActions from './home.actions';

export const initialHomeState: HomeState = {
  theme: 'light',
  language: 'en',
  notifications: true,
};

export const homeReducer = createReducer(
  initialHomeState,
  on(HomeActions.setTheme, (state, { theme }) => ({
    ...state,
    theme,
  })),
  on(HomeActions.setLanguage, (state, { language }) => ({
    ...state,
    language,
  })),
  on(HomeActions.toggleNotifications, (state) => ({
    ...state,
    notifications: !state.notifications,
  })),
  on(HomeActions.resetSettings, () => initialHomeState)
);