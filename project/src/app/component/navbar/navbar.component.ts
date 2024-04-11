import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // folderOpen: boolean = true

  // // folderOpenFun(){
  // //  this.folderOpen = !this.folderOpen;
  // // }

  // @Output()
  // sendSearchText: EventEmitter<string> = new EventEmitter<string>()

  // //using this we can access the DOM element without waiting for any event to be happen

  // //this give two arguments 
  // // 1.read: use it to  read different token from the queried elements.
  // // 2.static: Determine when the query is resolved.
  //     //true: when view is initialized (before the first change detection) for the first time.
  //     //false: if you want it to be resolved after every change detection
  // @ViewChild('searchText', {static: false}) inputString: ElementRef
  // searchText: string = '';
  
  // onInputText(){
  //   // console.log(this.searchText)
  //   this.searchText = this.inputString.nativeElement.value;
  //   // after pressing search button then only the search in user list is perform
  //   this.sendSearchText.emit(this.searchText)
  // }
}
