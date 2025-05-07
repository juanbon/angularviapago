import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTaxConfigsComponent } from './feeTaxConfigs.component';

describe('FeeTaxConfigsComponent', () => {
  let component: FeeTaxConfigsComponent;
  let fixture: ComponentFixture<FeeTaxConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeTaxConfigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTaxConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
