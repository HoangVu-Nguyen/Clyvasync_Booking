import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverHero } from './discover-hero';

describe('DiscoverHero', () => {
  let component: DiscoverHero;
  let fixture: ComponentFixture<DiscoverHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverHero],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
