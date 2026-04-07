import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerWidget } from './messenger-widget';

describe('MessengerWidget', () => {
  let component: MessengerWidget;
  let fixture: ComponentFixture<MessengerWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessengerWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(MessengerWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
