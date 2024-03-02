import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.scss']
})
export class ClassbindingComponent {
  emp1:any = {
    name: "John Doe",
    designation: 'fronted developer',
    active: false
  }
  
}
