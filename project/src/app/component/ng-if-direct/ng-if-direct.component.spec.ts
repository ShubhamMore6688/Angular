import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirectComponent } from './ng-if-direct.component';

describe('NgIfDirectComponent', () => {
  let component: NgIfDirectComponent;
  let fixture: ComponentFixture<NgIfDirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfDirectComponent]
    });
    fixture = TestBed.createComponent(NgIfDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
