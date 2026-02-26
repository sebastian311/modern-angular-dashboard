import { Routes } from '@angular/router';
import { HomeShellComponent } from './lib/home-feat/ui/home-component-shell/home-shell.component';
import { AuthenticationShellComponent } from './lib/authentication-feat/ui/authentication-shell/authentication-shell.component';
import { DashboardShellComponent } from './lib/dashboard-feat/ui/dashboard-shell/dashboard-shell.component';
import { authenticationGuard } from './lib/authentication-feat/data-access/authentication-guard-guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard/home'
    },
    {
        path: 'login',
        component: AuthenticationShellComponent
    },
    {
        path: 'dashboard',
        component: DashboardShellComponent,
        canActivateChild: [authenticationGuard],
        children: [
            {
                path: 'home',
                component: HomeShellComponent
            },
        ]
    }
];
