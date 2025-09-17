import { createAction, props } from '@ngrx/store';

export const setTheme = createAction(
  '[Home] Set Theme',
  props<{ theme: 'light' | 'dark' }>()
);

export const setLanguage = createAction(
  '[Home] Set Language',
  props<{ language: string }>()
);

export const toggleNotifications = createAction(
  '[Home] Toggle Notifications'
);

export const resetSettings = createAction('[Home] Reset Settings');