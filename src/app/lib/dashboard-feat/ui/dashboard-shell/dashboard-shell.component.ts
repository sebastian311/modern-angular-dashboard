import { Component, inject, OnInit, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardService } from '../../data-access/dashboard.service';
import { DashboardStore } from '../../data-access/dashboard.store';
import { DashboardCityListComponent } from '../dashboard-city-list/dashboard-city-list.component';
import { City } from '../../../../data-access/shared-models/city.model';
@Component({
  selector: 'app-dashboard-shell.component',
  imports: [MatSidenavModule, DashboardCityListComponent],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss',
  providers: [DashboardService, DashboardStore]
})
export class DashboardShellComponent implements OnInit{
  private dashboardStore = inject(DashboardStore);
  private cities = signal<City[]>;
  
  ngOnInit(): void {
    this.dashboardStore.fetchAllCities();
  }
}
