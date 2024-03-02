import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

   employee = [
    {
        id: 1,
        name: 'John Doe',
        active: true,
        age: 30,
        department: 'Human Resources',
        salary: 50000
    },
    {
        id: 2,
        name: 'Jane Smith',
        active: false,
        age: 28,
        department: 'Marketing',
        salary: 55000
    },
    {
        id: 3,
        name: 'Michael Johnson',
        active: true,
        age: 35,
        department: 'Finance',
        salary: 60000
    },
    {
        id: 4,
        name: 'Emily Brown',
        active: false,
        age: 40,
        department: 'Engineering',
        salary: 70000
    },
    {
        id: 5,
        name: 'David Lee',
        active: true,
        age: 45,
        department: 'Operations',
        salary: 75000
    }
];



}
