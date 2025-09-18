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
            exposedModule: './App',
            remoteName: 'myapp2',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            fallback: () => import('./not-found/not-found.page')
                .then(m => m.NotFoundPage)
        }),
        loadChildren: () => loadRemoteModule({
            exposedModule: './Routes',
            remoteName: 'myapp2',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            fallback: () => import('./not-found/not-found.page')
                .then(m => m.NotFoundPage)
        })
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.page')
            .then(m => m.NotFoundPage)
    }
];
