import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosYRecargasComponent } from './servicios-y-recargas.component';

describe('ServiciosYRecargasComponent', () => {
  let component: ServiciosYRecargasComponent;
  let fixture: ComponentFixture<ServiciosYRecargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosYRecargasComponent]
    });
    fixture = TestBed.createComponent(ServiciosYRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
