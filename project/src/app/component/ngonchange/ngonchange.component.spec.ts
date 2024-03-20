import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangeComponent } from './ngonchange.component';

describe('NgonchangeComponent', () => {
  let component: NgonchangeComponent;
  let fixture: ComponentFixture<NgonchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgonchangeComponent]
    });
    fixture = TestBed.createComponent(NgonchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
