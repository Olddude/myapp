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
