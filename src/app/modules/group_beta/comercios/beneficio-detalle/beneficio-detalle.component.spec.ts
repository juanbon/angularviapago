import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioDetalleComponent } from './beneficio-detalle.component';

describe('BeneficioDetalleComponent', () => {
  let component: BeneficioDetalleComponent;
  let fixture: ComponentFixture<BeneficioDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficioDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
