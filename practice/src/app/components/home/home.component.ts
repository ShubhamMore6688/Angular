import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';

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
changeToActive(emp:any){
  if(emp.active !== true){
    emp.active = true;
  }
}

changeToInactive(emp:any){
  if(emp.active !== false){
    emp.active = false;
  }
}

onSubmit(id:any, name:any, age:any, department:any, salary:any){
  this.employee.push({
    id: id,
    name: name,
    url: '../../../assets/Images/profile2.jpeg',
    active: false,
    age: age,
    department: department,
    salary: salary
  })
}

deletEmployee(i:number){
  this.employee.splice(i,1);
}

}
