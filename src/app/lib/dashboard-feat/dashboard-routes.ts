import { Routes } from "@angular/router";
import { DashboardShellComponent } from "./ui/dashboard-shell/dashboard-shell.component";
import { HomeShellComponent } from "../home-feat/ui/home-component-shell/home-shell.component";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: "",
        component: DashboardShellComponent,
        children: [
            {
                path: 'home',
                component: HomeShellComponent
            },
            {
                path: 'profile',
                loadComponent: () => import('../user-profile-feat/ui/user-profile-shell/user-profile-shell.component')
                    .then(m => m.UserProfileShellComponent)
            }
        ]
    }
]