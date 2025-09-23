import { createAction, props } from '@ngrx/store';

export const setTheme = createAction(
  '[MYAPP] [Home] Set Theme',
  props<{ theme: 'light' | 'dark' }>()
);

export const setLanguage = createAction(
  '[MYAPP] [Home] Set Language',
  props<{ language: string }>()
);

export const toggleNotifications = createAction(
  '[MYAPP] [Home] Toggle Notifications'
);

export const resetSettings = createAction('[MYAPP] [Home] Reset Settings');