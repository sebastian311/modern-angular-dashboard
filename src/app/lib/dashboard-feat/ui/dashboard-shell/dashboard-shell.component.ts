import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardService } from '../../data-access/dashboard.service';
import { DashboardStore } from '../../data-access/dashboard.store';
import { DashboardCityListComponent } from '../dashboard-city-list/dashboard-city-list.component';
import { RouterOutlet } from '@angular/router';
import { DashboardUserSettingsComponent } from "../dashboard-user-settings/dashboard-user-settings.component";
@Component({
  selector: 'app-dashboard-shell.component',
  imports: [MatSidenavModule, DashboardCityListComponent, RouterOutlet, DashboardUserSettingsComponent],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss',
  providers: [DashboardService, DashboardStore]
})
export class DashboardShellComponent implements OnInit{
  private dashboardStore = inject(DashboardStore);
  isLoading = this.dashboardStore.isLoading;
  cities = this.dashboardStore.cities;
  
  ngOnInit(): void {
    this.dashboardStore.fetchAllCities();
  }

  setSelectedCity(cityId: number): void {
    this.dashboardStore.setSelectedCity(cityId);
  }
}
