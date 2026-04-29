import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationApiService {
    private http = inject(HttpClient);

    loginUser(username: string, password: string): Observable<{token: string, isAdmin: boolean}> {
        return this.http.post<{token: string, isAdmin: boolean}>(
            `${environment.apiUrl}/auth/login`,
            { username, password }
        );
    }
    logout(): Observable<{message: string}> {
        return this.http.post<{message: string}>(`${environment.apiUrl}/logout`, {});
    }
}