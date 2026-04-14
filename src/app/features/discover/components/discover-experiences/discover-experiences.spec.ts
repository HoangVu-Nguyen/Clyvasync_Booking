import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverExperiences } from './discover-experiences';

describe('DiscoverExperiences', () => {
  let component: DiscoverExperiences;
  let fixture: ComponentFixture<DiscoverExperiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverExperiences],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverExperiences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
