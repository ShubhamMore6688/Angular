import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
  // this will create seperate dom so that global style properties are not applied to this component
})
export class Child1Component {

}
