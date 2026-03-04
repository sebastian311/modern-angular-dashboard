import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

const CITY_URL = 'http://geodb-cities-api.wirefreethought.com/cities';

@Injectable()

export class DashboardService {
    private http = inject(HttpClient);

    getCities(): Observable<any> {
        return this.http.get(CITY_URL);
    }
}