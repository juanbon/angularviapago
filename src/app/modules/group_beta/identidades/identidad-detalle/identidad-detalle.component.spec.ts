import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadDetalleComponent } from './identidad-detalle.component';

describe('IdentidadDetalleComponent', () => {
  let component: IdentidadDetalleComponent;
  let fixture: ComponentFixture<IdentidadDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentidadDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
