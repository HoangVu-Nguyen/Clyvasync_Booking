import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverFeatureInfo } from './discover-feature-info';

describe('DiscoverFeatureInfo', () => {
  let component: DiscoverFeatureInfo;
  let fixture: ComponentFixture<DiscoverFeatureInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverFeatureInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverFeatureInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
