import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoSaldosComponent } from './monitoreo-saldos.component';

describe('MonitoreoSaldosComponent', () => {
  let component: MonitoreoSaldosComponent;
  let fixture: ComponentFixture<MonitoreoSaldosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoreoSaldosComponent]
    });
    fixture = TestBed.createComponent(MonitoreoSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
