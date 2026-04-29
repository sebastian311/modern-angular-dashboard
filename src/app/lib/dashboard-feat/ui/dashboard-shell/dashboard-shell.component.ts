import { Component, inject, OnInit, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterOutlet } from '@angular/router';
import { AuthStore } from '../../../authentication-feat/data-access/authentication.store';
import { DashboardService } from '../../data-access/dashboard.service';
import { DashboardStore } from '../../data-access/dashboard.store';
import { DashboardCityListComponent } from '../dashboard-city-list/dashboard-city-list.component';
import { DashboardUserSettingsComponent } from '../dashboard-user-settings/dashboard-user-settings.component';
@Component({
  selector: 'app-dashboard-shell.component',
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    DashboardCityListComponent,
    RouterOutlet,
    DashboardUserSettingsComponent,
  ],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss',
  providers: [DashboardService, DashboardStore],
})
export class DashboardShellComponent implements OnInit {
  private dashboardStore = inject(DashboardStore);
  private authStore = inject(AuthStore);
  private router = inject(Router);

  isLoading = this.dashboardStore.isLoading;
  cities = this.dashboardStore.filteredCities;
  selectedCity = this.dashboardStore.selectedCity;
  userProfile = this.authStore.userProfile;
  isExpanded = signal<boolean>(false);

  ngOnInit(): void {
    this.dashboardStore.fetchAllCities();
  }

  toggleSidebar(): void {
    this.isExpanded.update((v) => !v);
  }

  searchQueryInList(term: string) {
    this.dashboardStore.filterCitiesBasedOnSearchTerm(term);
  }

  setSelectedCity(cityId: number): void {
    this.dashboardStore.setSelectedCity(cityId);
    this.router.navigate(['/'])
  }

  logoutUser(): void {
    this.authStore.logout();
  }
}
