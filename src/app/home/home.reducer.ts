import { createFeature, createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
import { initialHomeState } from '.';

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

export const homeFeature = createFeature({
  name: 'myapp-home',
  reducer: homeReducer,
});
