import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldosCierreComponent } from './saldos-cierre.component';

describe('SaldosCierreComponent', () => {
  let component: SaldosCierreComponent;
  let fixture: ComponentFixture<SaldosCierreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaldosCierreComponent]
    });
    fixture = TestBed.createComponent(SaldosCierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
