import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesTransactionsComponent } from './typestransactions.component';

describe('TypesTransactionsComponent', () => {
  let component: TypesTransactionsComponent;
  let fixture: ComponentFixture<TypesTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
