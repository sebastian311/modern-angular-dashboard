import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentShell } from './home-shell.component';

describe('HomeComponentShell', () => {
  let component: HomeComponentShell;
  let fixture: ComponentFixture<HomeComponentShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponentShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
