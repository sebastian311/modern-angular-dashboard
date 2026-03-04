import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { AuthenticationApiService } from './authentication-api.service';
import { AuthState } from './models/auth-state.model';
import { take, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

const initialState: AuthState = {
    token: '',
    isLoading: false,
    isAdmin: false
}

export const AuthStore = signalStore(
    {providedIn: 'root'},

    withState(initialState),

    withMethods((store) => {
        const authService = inject(AuthenticationApiService);
        const router = inject(Router);

        return {
            loginUser(user: string, pass: string): void {
                authService.loginUser(user, pass).pipe(
                    take(1),
                    tap(() => patchState(store, { isLoading: true }))
                ).subscribe({
                    next: (res: { token: string, isAdmin: boolean }) => {
                        sessionStorage.setItem('token', res.token);
                        router.navigate(['/']); // re-route to home

                        patchState(store, {
                            token: res.token,
                            isAdmin: res.isAdmin,
                            isLoading: false
                        })
                    },
                    error: (err: HttpErrorResponse) => {
                        console.error("An error has occured", err);
                        throw err;
                    }
                });
            },
            // TODO: Create register later, at some point
            // registerUser(user: string, pass: string) {
            //     //
            // }
            isUserLoggedIn(): boolean {
                return !!store.token() || !!sessionStorage.getItem('token');
            },
            logout(): void {
                authService.logout().pipe(
                    take(1),
                    tap(() => patchState(store, { isLoading: true }))
                ).subscribe({
                    next: (res: {message: string}) => {
                        console.log(res.message);

                        patchState(store, {
                            token: '',
                            isAdmin: false,
                            isLoading: false
                        })
                    },
                    error: () => {
                        console.error("An application error has occured on LOGOUT.")
                    }
                });
            }
        }
    })
);