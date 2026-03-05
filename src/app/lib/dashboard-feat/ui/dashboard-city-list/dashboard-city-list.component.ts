import { Component, input, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { City } from '../../../../data-access/shared-models/city.model';

@Component({
  selector: 'app-dashboard-city-list',
  imports: [MatListModule, MatProgressSpinnerModule],
  templateUrl: './dashboard-city-list.component.html',
  styleUrl: './dashboard-city-list.component.scss',
})
export class DashboardCityListComponent {
  cityList = input.required<City[]>();
  isLoading = input.required<boolean>();
  onSelectedCity = output<number>();

  onClick(cityId: number): void {
    this.onSelectedCity.emit(cityId);
  }
}
