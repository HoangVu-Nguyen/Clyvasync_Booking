import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCurated } from './discover-curated';

describe('DiscoverCurated', () => {
  let component: DiscoverCurated;
  let fixture: ComponentFixture<DiscoverCurated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverCurated],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverCurated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
