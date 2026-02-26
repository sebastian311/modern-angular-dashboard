import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login-box',
  imports: [MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './login-box.component.html',
  styleUrl: './login-box.component.scss',
})
export class LoginBoxComponent {

}
