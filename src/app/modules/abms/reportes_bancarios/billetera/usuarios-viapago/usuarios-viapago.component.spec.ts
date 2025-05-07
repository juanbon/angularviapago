import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosViaPagoComponent } from './usuarios-viapago.component';

describe('UsuariosViaPagoComponent', () => {
  let component: UsuariosViaPagoComponent;
  let fixture: ComponentFixture<UsuariosViaPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosViaPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosViaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
