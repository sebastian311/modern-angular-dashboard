import { Component, inject, signal } from '@angular/core';
import { UserProfileInformationComponent } from "../user-profile-information/user-profile-information.component";
import { AuthStore } from '../../../authentication-feat/data-access/authentication.store';

@Component({
  selector: 'app-user-profile-shell.component',
  imports: [ UserProfileInformationComponent ],
  templateUrl: './user-profile-shell.component.html',
  styleUrl: './user-profile-shell.component.scss',
})
export class UserProfileShellComponent {
  private authStore = inject(AuthStore);
  userProfile = this.authStore.userProfile;
  sessionUsername = signal(sessionStorage.getItem("username") || "");
}
