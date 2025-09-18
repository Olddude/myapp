
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
