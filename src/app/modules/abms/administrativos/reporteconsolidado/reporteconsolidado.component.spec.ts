import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteConsolidadoComponent } from './reporteconsolidado.component';

describe('ReporteConsolidadoComponent', () => {
  let component: ReporteConsolidadoComponent;
  let fixture: ComponentFixture<ReporteConsolidadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteConsolidadoComponent]
    });
    fixture = TestBed.createComponent(ReporteConsolidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
