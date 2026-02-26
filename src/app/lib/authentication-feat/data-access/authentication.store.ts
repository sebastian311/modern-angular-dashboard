import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { AuthenticationApiService } from './authentication-api.service';
import { AuthState } from './models/auth-state.model';
import { take, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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

        return {
            loginUser(user: string, pass: string): void {
                authService.loginUser(user, pass).pipe(
                    take(1),
                    tap(() => patchState(store, { isLoading: true }))
                ).subscribe({
                    next: (res: { token: string, isAdmin: boolean }) => {
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
            }
            // TODO: Create register later, at some point
            // registerUser(user: string, pass: string) {
            //     //
            // }
        }
    })
);