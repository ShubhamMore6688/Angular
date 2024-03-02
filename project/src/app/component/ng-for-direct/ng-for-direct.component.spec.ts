import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirectComponent } from './ng-for-direct.component';

describe('NgForDirectComponent', () => {
  let component: NgForDirectComponent;
  let fixture: ComponentFixture<NgForDirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgForDirectComponent]
    });
    fixture = TestBed.createComponent(NgForDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
