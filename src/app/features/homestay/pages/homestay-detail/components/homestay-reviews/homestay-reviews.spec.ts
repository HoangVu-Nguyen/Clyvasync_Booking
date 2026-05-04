import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayReviews } from './homestay-reviews';

describe('HomestayReviews', () => {
  let component: HomestayReviews;
  let fixture: ComponentFixture<HomestayReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayReviews],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayReviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
