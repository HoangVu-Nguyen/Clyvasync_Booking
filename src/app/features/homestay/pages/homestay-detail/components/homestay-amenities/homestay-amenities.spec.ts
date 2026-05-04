import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayAmenities } from './homestay-amenities';

describe('HomestayAmenities', () => {
  let component: HomestayAmenities;
  let fixture: ComponentFixture<HomestayAmenities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayAmenities],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayAmenities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
