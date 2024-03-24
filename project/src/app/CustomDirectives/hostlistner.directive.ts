import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistner]'
})
export class HostlistnerDirective {

  constructor(private element: ElementRef, private rederer: Renderer2) { }

  // hostlistener listen for the event that occur on that host element
  @HostListener('mouseenter') onMouseEnter(){
    this.rederer.addClass(this.element.nativeElement, 'highlight-product')
  }


  @HostListener('mouseout') onMouseOut(){
    this.rederer.removeClass(this.element.nativeElement, 'highlight-product')
  }

}
