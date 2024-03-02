import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-ref',
  templateUrl: './temp-ref.component.html',
  styleUrls: ['./temp-ref.component.scss']
})
export class TempRefComponent {

  value:any;
  getInputVal(val: any){
    // using this we can access entire html tag
    // console.log(val) 

    // if we want to only the value in that perticular input field
    console.log(val.value)
    this.value = val.value
  }

  getCheckboxVal(val:any){
    console.log(val.checked) // this give wether the box is checked or not
  }

  getRadioVal(val: any){
    console.log(val)
  }

  option:any
  getOptionVal(val:any){
    console.log(val.value)
    this.option = val.value
  }
}
