import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosYCondiciones } from './terminosycondiciones.component';

describe('TerminosYCondiciones', () => {
  let component: TerminosYCondiciones;
  let fixture: ComponentFixture<TerminosYCondiciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosYCondiciones ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosYCondiciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
