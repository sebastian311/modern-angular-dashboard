import { Component } from '@angular/core';
import { LoginBoxComponent } from "../login-box/login-box.component";

@Component({
  selector: 'app-authentication-shell',
  imports: [LoginBoxComponent],
  templateUrl: './authentication-shell.component.html',
  styleUrl: './authentication-shell.component.scss',
})
export class AuthenticationShellComponent {

}
