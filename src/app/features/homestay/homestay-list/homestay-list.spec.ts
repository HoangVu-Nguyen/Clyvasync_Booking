import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayList } from './homestay-list';

describe('HomestayList', () => {
  let component: HomestayList;
  let fixture: ComponentFixture<HomestayList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayList],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
