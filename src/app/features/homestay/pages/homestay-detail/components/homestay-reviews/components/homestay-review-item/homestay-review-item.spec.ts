import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayReviewItem } from './homestay-review-item';

describe('HomestayReviewItem', () => {
  let component: HomestayReviewItem;
  let fixture: ComponentFixture<HomestayReviewItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayReviewItem],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayReviewItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
