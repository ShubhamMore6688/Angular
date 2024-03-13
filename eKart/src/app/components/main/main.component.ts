import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  searchText:string = ''

  getSearchText(value: string){
    this.searchText = value;
   
  }
}
