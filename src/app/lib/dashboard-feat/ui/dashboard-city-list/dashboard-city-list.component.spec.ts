import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCityListComponent } from './dashboard-city-list.component';

describe('DashboardCityListComponent', () => {
  let component: DashboardCityListComponent;
  let fixture: ComponentFixture<DashboardCityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCityListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCityListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
