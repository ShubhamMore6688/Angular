import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent {
  emp: any  = {
    name: 'John',
    active: true,
    age: 28,
    department: 'Computer',
    salary: 23344
  }
}
