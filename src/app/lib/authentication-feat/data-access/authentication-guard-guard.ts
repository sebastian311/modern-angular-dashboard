import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from './authentication.store';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (sessionStorage.getItem("token")) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
