import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetCitiesResponseDto } from "./models/dashboard-cities-res.model";

import { environment } from "../../../../environments/environment.development";

@Injectable()

export class DashboardService {
    private http = inject(HttpClient);

    getCities(): Observable<GetCitiesResponseDto> {
        return this.http.post<GetCitiesResponseDto>(environment.CITY_URL, {
            country: 'Romania'
        });
    }
}