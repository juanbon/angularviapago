import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadesComponent } from './identidades.component';

describe('IdentidadesComponent', () => {
  let component: IdentidadesComponent;
  let fixture: ComponentFixture<IdentidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
