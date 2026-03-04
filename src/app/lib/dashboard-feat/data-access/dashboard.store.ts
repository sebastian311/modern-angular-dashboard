import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { DashboardState } from "./models/dashboard-state.model";
import { inject } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { map, take, tap } from "rxjs";
import { GetCitiesResponseDto } from "./models/dashboard-cities-res.model";
import { City } from "../../../data-access/shared-models/city.model";

const initialState: DashboardState = {
    cities: [],
    selectedCity: null,
    isLoading: false
}

export const DashboardStore = signalStore(
    withState(initialState),

    withMethods((store) => {
        const dashboardService = inject(DashboardService);

        return {
            fetchAllCities() {
                dashboardService.getCities().pipe(
                    tap(() => patchState(store, { isLoading: true })),
                    take(1),
                    map((res: GetCitiesResponseDto) => 
                        res.data?.map((city: string, index: number) => ({
                            id: index,
                            name: city,
                            weather: 'Sunny',
                            temperature: '27C',
                            bestTimeToVisit: new Date('2026-07-15')
                        })) ?? []
                    )
                ).subscribe({
                    next: (cities: City[]) => {
                        patchState(store, {
                            cities,
                            selectedCity: null,
                            isLoading: false,
                        })
                    },
                    error: (err) => {
                        throw err;
                    }
                });
            }
        }
    })
)