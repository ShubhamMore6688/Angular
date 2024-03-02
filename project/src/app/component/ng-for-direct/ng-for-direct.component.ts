import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-direct',
  templateUrl: './ng-for-direct.component.html',
  styleUrls: ['./ng-for-direct.component.scss']
})
export class NgForDirectComponent {
  // employee:any[] = ["Angular", "Javascript", "React", "Vue"]

  employee = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        department: 'Human Resources',
        salary: 50000
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 28,
        department: 'Marketing',
        salary: 55000
    },
    {
        id: 3,
        name: 'Michael Johnson',
        age: 35,
        department: 'Finance',
        salary: 60000
    },
    {
        id: 4,
        name: 'Emily Brown',
        age: 40,
        department: 'Engineering',
        salary: 70000
    },
    {
        id: 5,
        name: 'David Lee',
        age: 45,
        department: 'Operations',
        salary: 75000
    }
];
}
