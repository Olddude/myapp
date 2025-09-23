import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '.';

export const selectUserState = createFeatureSelector<UserState>('myapp-user');

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: UserState) => state.currentUser
);

export const selectIsAuthenticated = createSelector(
  selectUserState,
  (state: UserState) => state.isAuthenticated
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);

export const selectUserRole = createSelector(
  selectCurrentUser,
  (user) => user?.role || null
);