import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export const mockBackendInterceptor: HttpInterceptorFn = (req, next) => {
    const { url, method, body } = req;
    const networkDelay = 750;

    // LOGIN ENDPOINT
    if(url.endsWith('/login') && method === 'POST') {
        const credentials = body as { username?: string; password?: string } | null;
        const username = credentials?.username;
        const password = credentials?.password;

        if(username === 'admin' && password === 'admin') {
            return of(new HttpResponse({
                status: 200,
                body: {token: 'fake-jwt-token', isAdmin: true}
            })).pipe(delay(networkDelay))
        }

        return throwError(() => new HttpErrorResponse({
            status: 401,
            statusText: 'Unauthorized',
            error: { message: 'Invalid username or password' }
        })).pipe(delay(networkDelay));
    }

    if(url.endsWith('/logout') && method === 'POST') {
        sessionStorage.removeItem("token");

        return of(new HttpResponse({
            status: 200,
            body: {message: "Successfully logged out"}
        })).pipe(delay(networkDelay));
    }

    return next(req);
}