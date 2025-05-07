import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesManualesComponent } from './ajustesmanuales.component';

describe('AjustesManualesComponent', () => {
  let component: AjustesManualesComponent;
  let fixture: ComponentFixture<AjustesManualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustesManualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesManualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
