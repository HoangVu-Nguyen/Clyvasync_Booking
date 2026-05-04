import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayHeader } from './homestay-header';

describe('HomestayHeader', () => {
  let component: HomestayHeader;
  let fixture: ComponentFixture<HomestayHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
