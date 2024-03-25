import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input('appStyle') set addStyle(style: Object){
    let entries = Object.entries(style);

    for (const item of entries) {
      let [style, value] = item;
      this.renderer.setStyle(this.element.nativeElement, style, value);
    }
  }

}
