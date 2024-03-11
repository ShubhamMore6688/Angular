import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-prop-binding',
  templateUrl: './custom-prop-binding.component.html',
  styleUrls: ['./custom-prop-binding.component.scss']
})
export class CustomPropBindingComponent {

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
        active: true,
        age: 28,
        department: 'Marketing',
        salary: 55000
    },
    {
        id: 3,
        name: 'Michael Johnson',
        active: false,
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

totalUser = this.employee.length;
totalActiveUser = this.employee.filter(p => p.active === true).length;
totalinActiveUser = this.employee.filter(p => p.active === false).length;

usersToBeDisplay: string = 'All'

onFilterChange(value: string){
    this.usersToBeDisplay = value;
}
}
