import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {

  @Input() color!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

    // this is how we give the styling
    //  this.el.nativeElement.style.backgroundColor = '#f5f5f5';
    this.el.nativeElement.style.backgroundColor = this.color;
     this.el.nativeElement.style.border = '1px solid #ddd';
     this.el.nativeElement.style.borderRadius = '5px';
     this.el.nativeElement.style.width = '200px';
     this.el.nativeElement.style.padding = '10px';


    // this is how we can give the class
    // this.el.nativeElement.classList.add('card-warning')
  }

}
