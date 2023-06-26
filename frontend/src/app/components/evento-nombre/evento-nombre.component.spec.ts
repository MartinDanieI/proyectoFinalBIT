import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoNombreComponent } from './evento-nombre.component';

describe('EventoNombreComponent', () => {
  let component: EventoNombreComponent;
  let fixture: ComponentFixture<EventoNombreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoNombreComponent]
    });
    fixture = TestBed.createComponent(EventoNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
