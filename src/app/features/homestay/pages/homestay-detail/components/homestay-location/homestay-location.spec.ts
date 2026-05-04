import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayLocation } from './homestay-location';

describe('HomestayLocation', () => {
  let component: HomestayLocation;
  let fixture: ComponentFixture<HomestayLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayLocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
