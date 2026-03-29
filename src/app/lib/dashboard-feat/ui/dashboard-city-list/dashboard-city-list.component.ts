import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { City } from '../../../../data-access/shared-models/city.model';

@Component({
  selector: 'app-dashboard-city-list',
  imports: [MatListModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, NgClass],
  templateUrl: './dashboard-city-list.component.html',
  styleUrl: './dashboard-city-list.component.scss',
})
export class DashboardCityListComponent {
  cityList = input.required<City[]>();
  selectedCityId = input.required<number | null>();
  isLoading = input.required<boolean>();
  onSelectedCity = output<number>();
  onSearchQuery = output<string>();

  onClick(cityId: number): void {
    this.onSelectedCity.emit(cityId);
  }
}
