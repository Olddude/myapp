import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage)
    },
    {
        path: 'myapp2',
        loadComponent: () => loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.json',
            exposedModule: './AppComponent',
        }).then(m => m.AppComponent)
    }
];
