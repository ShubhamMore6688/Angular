import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-shoes',
  templateUrl: './filter-shoes.component.html',
  styleUrls: ['./filter-shoes.component.scss']
})
export class FilterShoesComponent {
  @Output()
  selectedRadioButton: EventEmitter<string>  = new EventEmitter<string>();
  filterShoes: string = 'All'

  onSelectButton(){
    this.selectedRadioButton.emit(this.filterShoes)
  }
}
