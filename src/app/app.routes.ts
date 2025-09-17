import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage)
    },
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage)
    },
    {
        path: 'myapp2',
        loadComponent: () => loadRemoteModule('myapp2', './App'),
        loadChildren: () => loadRemoteModule('myapp2', './Routes')
    }
];
