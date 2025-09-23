import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

import { homeProviders } from './home';
import { userProviders } from './user';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
        providers: homeProviders
    },
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage),
        providers: userProviders,
    },
    {
        path: 'myapp2',
        loadComponent: () => loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.json',
            remoteName: 'myapp2',
            exposedModule: './App'
        }),
        loadChildren: () => loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.json',
            remoteName: 'myapp2',
            exposedModule: './Routes'
        })
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.page')
            .then(m => m.NotFoundPage)
    }
];
