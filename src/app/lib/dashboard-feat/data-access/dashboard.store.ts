import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { DashboardState } from "./models/dashboard-state.model";
import { inject } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { take, tap } from "rxjs";

const initialState: DashboardState = {
    cities: [],
    selectedCity: "",
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
                    take(1)
                ).subscribe({
                    next: (res) => {
                        console.log("CITIES: ", res)
                    },
                    error: (err) => {
                        console.error("ERROR: ", err)
                    }
                });
            }
        }
    })
)