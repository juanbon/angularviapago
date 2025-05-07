import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockprepagasComponent } from './stockprepagas.component';

describe('StockprepagasComponent', () => {
  let component: StockprepagasComponent;
  let fixture: ComponentFixture<StockprepagasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockprepagasComponent]
    });
    fixture = TestBed.createComponent(StockprepagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
