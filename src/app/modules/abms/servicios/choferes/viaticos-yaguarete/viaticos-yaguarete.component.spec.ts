import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaticosYaguareteComponent } from './viaticos-yaguarete.component';

describe('ViaticosYaguareteComponent', () => {
  let component: ViaticosYaguareteComponent;
  let fixture: ComponentFixture<ViaticosYaguareteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaticosYaguareteComponent]
    });
    fixture = TestBed.createComponent(ViaticosYaguareteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
