import { Component, input } from '@angular/core';
import { MatListModule} from '@angular/material/list';
import { City } from '../../../../data-access/shared-models/city.model';

@Component({
  selector: 'app-dashboard-city-list',
  imports: [MatListModule],
  templateUrl: './dashboard-city-list.component.html',
  styleUrl: './dashboard-city-list.component.scss',
})
export class DashboardCityListComponent {
  cityList = input.required<City[]>();
}
