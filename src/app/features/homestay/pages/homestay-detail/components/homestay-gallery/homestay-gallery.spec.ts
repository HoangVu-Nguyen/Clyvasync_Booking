import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayGallery } from './homestay-gallery';

describe('HomestayGallery', () => {
  let component: HomestayGallery;
  let fixture: ComponentFixture<HomestayGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomestayGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
