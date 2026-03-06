import { Component, input, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserProfile } from '../../../../data-access/shared-models/user-profile.model';

@Component({
  selector: 'app-user-profile',
  imports: [MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './dashboard-user-settings.component.html',
  styleUrl: './dashboard-user-settings.component.scss',
})
export class DashboardUserSettingsComponent {
  userProfile = input.required<UserProfile>();
  onLogout = output<void>();
  sessionUsername = signal<string>(sessionStorage.getItem("username") || "");
  openDropdown = signal<boolean>(false);

  emitLogout(): void {
    this.onLogout.emit();
  }
}
