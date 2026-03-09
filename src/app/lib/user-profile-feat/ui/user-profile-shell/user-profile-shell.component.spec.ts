import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileShellComponent } from './user-profile-shell.component';

describe('UserProfileShellComponent', () => {
  let component: UserProfileShellComponent;
  let fixture: ComponentFixture<UserProfileShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileShellComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
