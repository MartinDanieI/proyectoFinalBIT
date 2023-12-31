import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEventosComponent } from './mostrar-eventos.component';

describe('MostrarEventosComponent', () => {
  let component: MostrarEventosComponent;
  let fixture: ComponentFixture<MostrarEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarEventosComponent]
    });
    fixture = TestBed.createComponent(MostrarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
