import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { take, tap } from 'rxjs';
import { UserProfile } from '../../../data-access/shared-models/user-profile.model';
import { AuthenticationApiService } from './authentication-api.service';
import { AuthState } from './models/auth-state.model';

const initialState: AuthState = {
  token: '',
  isLoading: false,
  loggedUser: '',
  avatar: '',
  isAdmin: false,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    userProfile: computed<UserProfile>(() => ({
      username: store.loggedUser(),
      isAdmin: store.isAdmin(),
      avatar: store.avatar(),
    })),
  })),

  withMethods((store) => {
    const authService = inject(AuthenticationApiService);
    const router = inject(Router);

    return {
      loginUser(user: string, pass: string): void {
        authService
          .loginUser(user, pass)
          .pipe(
            take(1),
            tap(() => patchState(store, { isLoading: true })),
          )
          .subscribe({
            next: (res: { token: string; isAdmin: boolean }) => {
              sessionStorage.setItem('token', res.token);
              router.navigate(['/']); // re-route to home

              patchState(store, {
                token: res.token,
                isAdmin: res.isAdmin,
                loggedUser: user,
                avatar: '', // TODO: Modify this field when real BE exists
                isLoading: false,
              });
            },
            error: (err: HttpErrorResponse) => {
              console.error('An error has occured', err);
              throw err;
            },
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
        authService
          .logout()
          .pipe(
            take(1),
            tap(() => patchState(store, { isLoading: true })),
          )
          .subscribe({
            next: (_res: { message: string }) => {
              patchState(store, {
                token: '',
                isAdmin: false,
                isLoading: false,
              });

              sessionStorage.removeItem('token');
              router.navigate(['/login']);
            },
            error: () => {
              console.error('An application error has occured on LOGOUT.');
            },
          });
      },
    };
  }),
);
