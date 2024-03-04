import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-containers',
  templateUrl: './ng-containers.component.html',
  styleUrls: ['./ng-containers.component.scss']
})
export class NgContainersComponent {
  isLoggedIn:boolean = false;

  employee = [
    {
        id: 1,
        name: 'John Doe',
        url: '../../../assets/Images/profile1.png',
        active: true,
        age: 30,
        department: 'Human Resources',
        salary: 50000
    },
    {
        id: 2,
        name: 'Jane Smith',
        url: '../../../assets/Images/profile2.jpeg',
        active: true,
        age: 28,
        department: 'Marketing',
        salary: 55000
    },
    {
        id: 3,
        name: 'Michael Johnson',
        url: '../../../assets/Images/profile3.png',
        active: false,
        age: 35,
        department: 'Finance',
        salary: 60000
    },
    {
        id: 4,
        name: 'Emily Brown',
        url: '../../../assets/Images/profile2.jpeg',
        active: false,
        age: 40,
        department: 'Engineering',
        salary: 70000
    },
    {
        id: 5,
        name: 'David Lee',
        url: '../../../assets/Images/profile1.png',
        active: true,
        age: 45,
        department: 'Operations',
        salary: 75000
    }
];

emp:any = {
  name: 'Max',
  age: 22,
  year: 1995
}
}
