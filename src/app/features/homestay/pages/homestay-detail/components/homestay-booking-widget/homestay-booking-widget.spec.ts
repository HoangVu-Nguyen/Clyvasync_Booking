import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayBookingWidget } from './homestay-booking-widget';

describe('HomestayBookingWidget', () => {
  let component: HomestayBookingWidget;
  let fixture: ComponentFixture<HomestayBookingWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayBookingWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayBookingWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
