import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @ContentChild('para') paraE1: ElementRef

  clickHandler(){
    console.log(this.paraE1.nativeElement)
  }
}
