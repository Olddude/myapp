import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { homeFeature } from "./home.reducer";
import { HomeEffects } from "./home.effects";

export type HomeState = {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

export const initialHomeState: HomeState = {
  theme: 'light',
  language: 'en',
  notifications: true,
};

export const homeProviders = [
    provideState(homeFeature),
    provideEffects([HomeEffects])
];
