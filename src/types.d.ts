declare module '@myapp/types' {
  export interface AppState {
    user: UserState;
    settings: SettingsState;
  }

  export interface UserState {
    currentUser: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }

  export interface SettingsState {
    theme: 'light' | 'dark';
    language: string;
    notifications: boolean;
  }
}
