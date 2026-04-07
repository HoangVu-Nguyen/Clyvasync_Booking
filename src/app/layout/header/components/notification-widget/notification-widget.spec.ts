import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationWidget } from './notification-widget';

describe('NotificationWidget', () => {
  let component: NotificationWidget;
  let fixture: ComponentFixture<NotificationWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
