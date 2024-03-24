import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConditionalDir]'
})
export class ConditionalDirDirective {

  constructor(private element: ElementRef, private rederer: Renderer2) {

  }

  @Input() set appConditionalDir(disable: Boolean){
    if(disable){
      this.rederer.addClass(this.element.nativeElement, 'disable-user')
    }
  }

}
