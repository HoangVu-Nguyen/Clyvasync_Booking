import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWidget } from './menu-widget';

describe('MenuWidget', () => {
  let component: MenuWidget;
  let fixture: ComponentFixture<MenuWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
