import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardCityListComponent } from '../dashboard-city-list/dashboard-city-list.component';
@Component({
  selector: 'app-dashboard-shell.component',
  imports: [MatSidenavModule, DashboardCityListComponent],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss',
})
export class DashboardShellComponent {

}
