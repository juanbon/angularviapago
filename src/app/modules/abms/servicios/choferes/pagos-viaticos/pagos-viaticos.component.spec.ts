import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosViaticosComponent } from './pagos-viaticos.component';

describe('PagosViaticosComponent', () => {
  let component: PagosViaticosComponent;
  let fixture: ComponentFixture<PagosViaticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosViaticosComponent]
    });
    fixture = TestBed.createComponent(PagosViaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
