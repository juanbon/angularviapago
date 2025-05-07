import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTransaccionesComponent } from './grafica-transacciones.component';

describe('GraficaTransaccionesComponent', () => {
  let component: GraficaTransaccionesComponent;
  let fixture: ComponentFixture<GraficaTransaccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaTransaccionesComponent]
    });
    fixture = TestBed.createComponent(GraficaTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
