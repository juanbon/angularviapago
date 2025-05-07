import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioDetalleComponent } from './comercio-detalle.component';

describe('ComercioDetalleComponent', () => {
  let component: ComercioDetalleComponent;
  let fixture: ComponentFixture<ComercioDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercioDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
