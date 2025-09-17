declare module '@myapp/types' {
  export type AppState = {
    home: HomeState;
    user: UserState;
  }

  export type HomeState = {
    theme: 'light' | 'dark';
    language: string;
    notifications: boolean;
  }

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
}
