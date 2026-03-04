import { Routes } from '@angular/router';
import { authenticationGuard } from './lib/authentication-feat/data-access/authentication-guard-guard';
import { AuthenticationShellComponent } from './lib/authentication-feat/ui/authentication-shell/authentication-shell.component';

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
        canActivateChild: [authenticationGuard],
        loadChildren: () => 
            import('./lib/dashboard-feat/dashboard-routes')
                .then(r => r.DASHBOARD_ROUTES)
    }
];
