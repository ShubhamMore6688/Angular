import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.scss']
})
export class FilterUserComponent {
  @Input()
  All:number = 0;
  @Input()
  Active: number = 0;
  @Input()
  inActive: number = 0;
}
