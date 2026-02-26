import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

// TODO: Modify this accordingly once we connect to a real backend
const apiUrl = "https://localhost:4200"

@Injectable({
    providedIn: 'root'
})

export class AuthenticationApiService {
    private http = inject(HttpClient);

    loginUser(username: string, password: string): Observable<{token: string, isAdmin: boolean}> {
        return this.http.post<{token: string, isAdmin: boolean}>(
            `${apiUrl}/login`,
            { username, password }
        );
    }
}