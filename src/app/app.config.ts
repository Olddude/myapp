import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { ActionReducerMap, MetaReducer, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { appRoutes } from './app.routes';
import { AppState } from '@myapp/types';
import { userReducer } from './user/user.reducer';
import { homeReducer } from './home/home.reducer';
import { environment } from '../environments/environment';


const reducers: ActionReducerMap<AppState> = {
  home: homeReducer,
  user: userReducer,
};

const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(reducers, { metaReducers }),
    provideEffects([]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
};
