import { Component, inject, input, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserProfile } from '../../../../data-access/shared-models/user-profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './dashboard-user-settings.component.html',
  styleUrl: './dashboard-user-settings.component.scss',
})
export class DashboardUserSettingsComponent {
  private router = inject(Router);

  userProfile = input.required<UserProfile>();
  isExpanded = input.required<boolean>();
  onLogout = output<void>();
  sessionUsername = signal<string>(sessionStorage.getItem("username") || "");
  openDropdown = signal<boolean>(false);

  emitLogout(): void {
    this.onLogout.emit();
  }

  goToProfile(): void {
    this.router.navigate(['dashboard/profile']);
  }
}
