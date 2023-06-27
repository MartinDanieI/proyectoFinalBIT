import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosSocialesComponent } from './eventos-sociales.component';

describe('EventosSocialesComponent', () => {
  let component: EventosSocialesComponent;
  let fixture: ComponentFixture<EventosSocialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosSocialesComponent]
    });
    fixture = TestBed.createComponent(EventosSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
