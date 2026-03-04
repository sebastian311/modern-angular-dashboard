import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetCitiesResponseDto } from "./models/dashboard-cities-res.model";

const CITY_URL = 'https://countriesnow.space/api/v0.1/countries/cities';

@Injectable()

export class DashboardService {
    private http = inject(HttpClient);

    getCities(): Observable<GetCitiesResponseDto> {
        return this.http.post<GetCitiesResponseDto>(CITY_URL, {
            country: 'Romania'
        });
    }
}