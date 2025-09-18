import { createFeature, provideState } from '@ngrx/store';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { HomeEffects } from './home/home.effects';
import { homeFeature } from './home/home.reducer';
import { userFeature } from './user/user.reducer';
import { UserEffects } from './user/user.effects';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
        providers: [
            provideState(homeFeature),
            provideEffects([HomeEffects])
        ],
    },
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage),
        providers: [
            provideState(userFeature),
            provideEffects([UserEffects])
        ],
    },
    // {
    //     path: 'myapp2',
    //     loadChildren: () => loadRemoteModule('myapp2', './Routes'),
    //     providers: [
    //         provideFeature()
    //     ]
    // }
];
