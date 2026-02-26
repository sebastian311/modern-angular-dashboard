import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationShell } from './authentication-shell.component';

describe('AuthenticationShell', () => {
  let component: AuthenticationShell;
  let fixture: ComponentFixture<AuthenticationShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
