import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropBindingComponent } from './custom-prop-binding.component';

describe('CustomPropBindingComponent', () => {
  let component: CustomPropBindingComponent;
  let fixture: ComponentFixture<CustomPropBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPropBindingComponent]
    });
    fixture = TestBed.createComponent(CustomPropBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
