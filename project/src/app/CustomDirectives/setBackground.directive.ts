import { Directive, ElementRef } from "@angular/core";

@Directive({
    // when this selector is used on the dom element the constructor is called and the reference of that dom element
    // is send as the parameter in constructor
    selector: '[setBackground]'
})
export class setBackground{
    constructor(element: ElementRef){
        element.nativeElement.style.backgroundColor = '#36454F'
        element.nativeElement.style.color = 'white'
    }
}