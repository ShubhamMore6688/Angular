import { Component } from '@angular/core';

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

}
