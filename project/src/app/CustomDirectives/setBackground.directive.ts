import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    // when this selector is used on the dom element the constructor is called and the reference of that dom element
    // is send as the parameter in constructor
    selector: '[setBackground]'
})
export class setBackground implements OnInit{
    // private element: ElementRef
    constructor(private element: ElementRef, private renderer: Renderer2){
        // this.element = element
    }

    // in this approach we directly accessing the dom element and manipulate it this is not a recommended way because
    // angular keeps the component & view in sync using templates, data binding and change detection etc. all of them are bypassed when we update the dom directly
    // dom manipulation works only in browsers. we cannot use it in other platform like web workers, servers, desktop or mobile application
    // dom aps's does not sanitize the data. hence it is possible to inject a script
    
    
    //Renderer2
    //this allow us to manipulate the dom without accessing the dom element directly.
    // by providing a layer of abstraction between dom element and component code
    
    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = '#36454F'
        // this.element.nativeElement.style.color = 'white'

        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F')
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white')
    }





    
}