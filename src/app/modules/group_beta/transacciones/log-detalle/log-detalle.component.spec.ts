import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDetalleComponent } from './log-detalle.component';

describe('LogDetalleComponent', () => {
  let component: LogDetalleComponent;
  let fixture: ComponentFixture<LogDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
