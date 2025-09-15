import { createAction, props } from '@ngrx/store';

export const setTheme = createAction(
  '[Settings] Set Theme',
  props<{ theme: 'light' | 'dark' }>()
);

export const setLanguage = createAction(
  '[Settings] Set Language',
  props<{ language: string }>()
);

export const toggleNotifications = createAction(
  '[Settings] Toggle Notifications'
);

export const resetSettings = createAction('[Settings] Reset Settings');