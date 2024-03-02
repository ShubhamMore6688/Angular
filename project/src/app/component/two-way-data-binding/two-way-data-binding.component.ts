import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent {
  email:string = 'abc@gmail.com'

  isChecked:boolean = false

  gender:string = 'male'

  volume:number = 5

  value:string = 'angular'
}
