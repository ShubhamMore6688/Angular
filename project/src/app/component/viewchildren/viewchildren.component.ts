import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.scss']
})
export class ViewchildrenComponent {
  // viewchildren is used to access the all elements with same reference variable
  // viewchildren give the values only when the change detection cycle 
  // it cannot be accessed inside the ngonInit function

  @ViewChildren('inputname') Name: QueryList<ElementRef>
  fullName: string = ''
  show(){
    let tempName = ''
    this.Name.forEach((e)=>{
      tempName += e.nativeElement.value + ' '
    })
    this.fullName = tempName
  }
}
