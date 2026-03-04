import { Component, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-login-box',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-box.component.html',
  styleUrl: './login-box.component.scss',
})
export class LoginBoxComponent {
  private fb = new FormBuilder();
  readonly loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  loginEmit = output<{ username: string; password: string }>();
  wrongCredentials = input<boolean>(false);

  login() {
    if (this.loginForm.valid) {
      this.loginEmit.emit(this.loginForm.value);
    }
  }
}
