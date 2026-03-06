import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { AuthStore } from '../../../authentication-feat/data-access/authentication.store';

@Component({
  selector: 'app-home-component-shell',
  imports: [RouterModule, MatDividerModule],
  templateUrl: './home-shell.component.html',
  styleUrl: './home-shell.component.scss',
})
export class HomeShellComponent {
  private authStore = inject(AuthStore);
  username = computed(() => 
    this.authStore.userProfile().username 
      ? this.authStore.userProfile().username
      : sessionStorage.getItem("username") 
  );
}
