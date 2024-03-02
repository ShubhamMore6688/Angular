import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent {
  count:number = 0;
  changeCount(){
    this.count++;
  }

  value:any = "anup"
  changeValue(val:any){
    this.value = val;
  }

  string:any = ""
  onChangeInput(event:any){
    console.log(event)
    this.string = event.target.value
  }

  Option:any;
  onChangeSelect(event:any){
    this.Option = event.target.value
  }

  onScroll(event:any){
    console.log(event)
  }
}
