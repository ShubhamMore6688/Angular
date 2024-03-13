import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output()
  sendSearchText: EventEmitter<string> = new EventEmitter<string>()
  searchText: string = ''
  
  onSearchText(item: HTMLInputElement){
    this.searchText = item.value;
    this.sendSearchText.emit(this.searchText)

  }
}
