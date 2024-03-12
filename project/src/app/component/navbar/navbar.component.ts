import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  folderOpen: boolean = true

  // folderOpenFun(){
  //  this.folderOpen = !this.folderOpen;
  // }

  @Output()
  sendSearchText: EventEmitter<string> = new EventEmitter<string>()

  searchText: string = '';
  
  onInputText(item: HTMLInputElement){
    // console.log(this.searchText)
    this.searchText = item.value;
    // after pressing search button then only the search in user list is perform
    this.sendSearchText.emit(this.searchText)
  }
}
