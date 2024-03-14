import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterShoesComponent } from './filter-shoes.component';

describe('FilterShoesComponent', () => {
  let component: FilterShoesComponent;
  let fixture: ComponentFixture<FilterShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterShoesComponent]
    });
    fixture = TestBed.createComponent(FilterShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
