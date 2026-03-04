import { Component, inject, signal } from '@angular/core';
import { AuthStore } from '../../data-access/authentication.store';
import { LoginBoxComponent } from '../login-box/login-box.component';

@Component({
  selector: 'app-authentication-shell',
  imports: [LoginBoxComponent],
  templateUrl: './authentication-shell.component.html',
  styleUrl: './authentication-shell.component.scss',
})
export class AuthenticationShellComponent {
  private authStore = inject(AuthStore);
  wrongCredentials = this.authStore.isUserLoggedIn() ? signal(false) : signal(true);

  login(credentials: { username: string; password: string }) {
    this.authStore.loginUser(credentials.username, credentials.password);
  }
}
