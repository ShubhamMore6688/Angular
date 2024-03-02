import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.scss']
})
export class PropertybindingComponent {
    myImgSrc:string = "https://dev.uxtrendz.com/assets/images/logo-light.png";
    dynamicVal:string = "John";

    inStock:boolean = false;
}
