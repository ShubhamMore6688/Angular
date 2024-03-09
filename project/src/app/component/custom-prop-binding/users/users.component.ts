import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input()
  emp: {
    id: number,
    name: string,
    active: boolean,
    age: number,
    department: string,
    salary: number
  }
}
