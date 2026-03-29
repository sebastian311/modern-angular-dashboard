import { City } from "../../../../data-access/shared-models/city.model";

export interface DashboardState {
    filteredCities: City[];
    allCities: City[];
    selectedCity: number | null;
    isLoading: boolean;
}