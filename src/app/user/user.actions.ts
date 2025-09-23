import { createAction, props } from '@ngrx/store';
import { User } from '.';

export const login = createAction(
  '[MYAPP] [User] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[MYAPP] [User] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[MYAPP] [User] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[MYAPP] [User] Logout');

export const updateUser = createAction(
  '[MYAPP] [User] Update User',
  props<{ user: User }>()
);

export const clearError = createAction('[MYAPP] [User] Clear Error');