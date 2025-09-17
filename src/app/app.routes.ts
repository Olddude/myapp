import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage)
    }
];
