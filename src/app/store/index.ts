import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from './app.state';
import { userReducer } from './user/user.reducer';
import { settingsReducer } from './settings/settings.reducer';
import { environment } from '../../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  settings: settingsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export * from './app.state';
export * from './user/user.actions';
export * from './user/user.selectors';
export * from './settings/settings.actions';
export * from './settings/settings.selectors';