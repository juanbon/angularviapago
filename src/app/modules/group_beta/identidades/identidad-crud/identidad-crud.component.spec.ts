import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadCrudComponent } from './identidad-crud.component';

describe('IdentidadCrudComponent', () => {
  let component: IdentidadCrudComponent;
  let fixture: ComponentFixture<IdentidadCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentidadCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
