import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardService } from '../../data-access/dashboard.service';
import { DashboardStore } from '../../data-access/dashboard.store';
import { DashboardCityListComponent } from '../dashboard-city-list/dashboard-city-list.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard-shell.component',
  imports: [MatSidenavModule, DashboardCityListComponent, RouterOutlet],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss',
  providers: [DashboardService, DashboardStore]
})
export class DashboardShellComponent implements OnInit{
  private dashboardStore = inject(DashboardStore);
  cities = this.dashboardStore.cities;
  
  ngOnInit(): void {
    this.dashboardStore.fetchAllCities();
  }
}
