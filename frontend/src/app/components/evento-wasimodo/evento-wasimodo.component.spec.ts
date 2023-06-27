import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoWasimodoComponent } from './evento-wasimodo.component';

describe('EventoWasimodoComponent', () => {
  let component: EventoWasimodoComponent;
  let fixture: ComponentFixture<EventoWasimodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoWasimodoComponent]
    });
    fixture = TestBed.createComponent(EventoWasimodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
