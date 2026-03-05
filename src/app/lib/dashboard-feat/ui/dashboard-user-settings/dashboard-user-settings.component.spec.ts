import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserSettingsComponent } from './dashboard-user-settings.component';

describe('DashboardUserSettingsComponent', () => {
  let component: DashboardUserSettingsComponent;
  let fixture: ComponentFixture<DashboardUserSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
