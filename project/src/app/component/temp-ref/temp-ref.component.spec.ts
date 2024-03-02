import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRefComponent } from './temp-ref.component';

describe('TempRefComponent', () => {
  let component: TempRefComponent;
  let fixture: ComponentFixture<TempRefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempRefComponent]
    });
    fixture = TestBed.createComponent(TempRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
