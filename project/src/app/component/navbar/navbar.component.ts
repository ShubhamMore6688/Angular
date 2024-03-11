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
  
  onInputText(){
    // console.log(this.searchText)
    this.sendSearchText.emit(this.searchText)
  }
}
