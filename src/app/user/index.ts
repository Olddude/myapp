import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { userFeature } from "./user.reducer";
import { UserEffects } from "./user.effects";

export type UserState = {
  currentUser: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const initialUserState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const userProviders = [
    provideState(userFeature),
    provideEffects([UserEffects])
];
