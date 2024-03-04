import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainersComponent } from './ng-containers.component';

describe('NgContainersComponent', () => {
  let component: NgContainersComponent;
  let fixture: ComponentFixture<NgContainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContainersComponent]
    });
    fixture = TestBed.createComponent(NgContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
