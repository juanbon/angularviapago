import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsModificaciones } from './logs-modificaciones.component';

describe('LogsModificaciones', () => {
  let component: LogsModificaciones;
  let fixture: ComponentFixture<LogsModificaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsModificaciones ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsModificaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
