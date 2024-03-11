import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.scss']
})
export class FilterUserComponent {
  @Input()
  All:number = 0;
  @Input()
  Active: number = 0;
  @Input()
  inActive: number = 0;

  @Output()
  selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton = "All"

  onSelectedRadioBtnChange(){
    // console.log(this.selectedFilterRadioButton)
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton)
  }
}
