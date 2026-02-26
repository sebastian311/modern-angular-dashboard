import { Routes } from '@angular/router';
import { HomeShellComponent } from './lib/home-feat/ui/home-component-shell/home-shell.component';
import { AuthenticationShellComponent } from './lib/authentication-feat/ui/authentication-shell/authentication-shell.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeShellComponent
    },
    {
        path: 'login',
        component: AuthenticationShellComponent
    }
];
