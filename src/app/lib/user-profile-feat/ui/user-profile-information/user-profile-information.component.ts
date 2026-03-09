import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { UserProfileInformation } from '../../data-access/models/user-profile-info.model';

type UserProfileForm = {
  nameControl: FormControl<string>,
  emailControl: FormControl<string>,
  ageControl: FormControl<number | null>,
  favCityControl: FormControl<string>,
  genderControl: FormControl<string | null>,
  interestsControl: FormControl<string>,
}
@Component({
  selector: 'app-user-profile-information',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './user-profile-information.component.html',
  styleUrl: './user-profile-information.component.scss',
})
export class UserProfileInformationComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  onUserProfileSave = output<UserProfileInformation>();
  editMode = signal<boolean>(false);
  
  userProfileFg: FormGroup<UserProfileForm> = this.fb.group({
    nameControl: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    emailControl: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    ageControl: this.fb.control<number | null>(null, { validators: [Validators.required] }),
    favCityControl: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    genderControl: this.fb.control<string | null>(null, { validators: [Validators.required] }),
    interestsControl: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
  });

  saveModifiedData() {
    if(!this.userProfileFg.invalid) {
      this.onUserProfileSave.emit(this.userProfileFg.value as UserProfileInformation);
      // TODO: avoid type assertion; map getRawValue() to UserProfileInformation explicitly (and normalize age/gender).
    }
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
