import { Component, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserProfile } from '../../../../data-access/shared-models/user-profile.model';

@Component({
  selector: 'app-user-profile',
  imports: [MatIconModule],
  templateUrl: './dashboard-user-settings.component.html',
  styleUrl: './dashboard-user-settings.component.scss',
})
export class DashboardUserSettingsComponent {
  userProfile = input.required<UserProfile>();
  openDropdown = signal<boolean>(false);
}
