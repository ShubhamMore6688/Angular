import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-direct',
  templateUrl: './ng-if-direct.component.html',
  styleUrls: ['./ng-if-direct.component.scss']
})
export class NgIfDirectComponent implements OnInit{
  isAvailable:boolean = true
  isLoggedIn:boolean = false

  employee:any 

  ngOnInit(): void {
      setTimeout(()=>{
        this.employee = {
          'name':"anup",
          "age": "12",
          "department":"computer"
        }
      },4000)
  }

  emp1:any = {
    name: "employee1",
    age: 39,
    active:false,
    department: 'Development'
  }
}
