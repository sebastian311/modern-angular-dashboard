import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { map, take } from "rxjs";
import { City } from "../../../data-access/shared-models/city.model";
import { DashboardService } from "./dashboard.service";
import { GetCitiesResponseDto } from "./models/dashboard-cities-res.model";
import { DashboardState } from "./models/dashboard-state.model";

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
                patchState(store, { isLoading: true })
                
                dashboardService.getCities().pipe(
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
                        const smallerCitiesArray = cities.slice(0, 50); // TODO: Implement some sort of pagination (UI Optimization)

                        patchState(store, {
                            cities: smallerCitiesArray,
                            selectedCity: null,
                            isLoading: false,
                        })
                    },
                    error: (err) => {
                        throw err;
                    }
                });
            },
            setSelectedCity(cityId: number): void {
                patchState(store, { selectedCity: cityId });
            }
        }
    })
)