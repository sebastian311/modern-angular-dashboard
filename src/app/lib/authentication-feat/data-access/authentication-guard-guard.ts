import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from './authentication.store';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (authStore.token()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
