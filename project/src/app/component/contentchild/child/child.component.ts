import { Component, ContentChild, ContentChildren, ElementRef, Query, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @ContentChild('para') paraE1: ElementRef
  @ContentChildren('para') paraList: QueryList<ElementRef>
  clickHandler(){
    // console.log(this.paraE1.nativeElement)
    console.log(this.paraList.forEach(e => {
      console.log(e.nativeElement)
    }))
  }
}
