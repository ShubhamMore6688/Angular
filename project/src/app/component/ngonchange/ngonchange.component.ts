import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ngonchange',
  templateUrl: './ngonchange.component.html',
  styleUrls: ['./ngonchange.component.scss']
})
export class NgonchangeComponent implements OnChanges {
  @Input() message: string;
  
  // ngonchanges is run only when the value of input variable is changes
  ngOnChanges(){
    console.log("ngonchange occure")
    console.log(this.message)
  }
}
