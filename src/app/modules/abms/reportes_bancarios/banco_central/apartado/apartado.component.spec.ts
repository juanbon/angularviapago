import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoComponent } from './apartado.component';

describe('ApartadoComponent', () => {
  let component: ApartadoComponent;
  let fixture: ComponentFixture<ApartadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartadoComponent]
    });
    fixture = TestBed.createComponent(ApartadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
