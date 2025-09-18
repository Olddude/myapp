import { createAction, props } from '@ngrx/store';
import { User } from '../app.config';

export const login = createAction(
  '[User] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[User] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[User] Logout');

export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);

export const clearError = createAction('[User] Clear Error');