import { City } from "../../../../data-access/shared-models/city.model";

export interface DashboardState {
    cities: City[]
    selectedCity: number | null;
    isLoading: boolean;
}