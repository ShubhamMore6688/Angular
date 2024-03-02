import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDirectComponent } from './ng-switch-direct.component';

describe('NgSwitchDirectComponent', () => {
  let component: NgSwitchDirectComponent;
  let fixture: ComponentFixture<NgSwitchDirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSwitchDirectComponent]
    });
    fixture = TestBed.createComponent(NgSwitchDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
