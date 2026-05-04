import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayDetail } from './homestay-detail';

describe('HomestayDetail', () => {
  let component: HomestayDetail;
  let fixture: ComponentFixture<HomestayDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
