import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngonchange',
  templateUrl: './ngonchange.component.html',
  styleUrls: ['./ngonchange.component.scss']
})
export class NgonchangeComponent implements OnChanges, OnInit, DoCheck {
  // for this ngonchange do not run again because this message storing the reference of the array
  // so at each append we are not changing the reference
  // @Input() message: string[];
  @Input() message: string;

  @ViewChild('para') temppara: ElementRef
  // ngonchanges is run only when the value of input variable is changes
  ngOnChanges(){
    console.log("ngonchange occure")
    // console.log(this.message)
  }

  //ngoninit is called only once(during the first change detection life cycle) after the ngonchange
  // any property decorated with @viewchild, @viewchildren, @contentchild or @contentchildren will not be available to use
  ngOnInit(){
    console.log("ngoninit")
    // we cannot access this
    // console.log(this.temppara.nativeElement)
  }

  //angular invokes ngDoCheck hook during every change detection lifecycle
  // this invokes after ngonchange and ngoninit hooks
  //ngdocheck hook is also a greate place to use, when you want to execute some code on every change detection cycle
  ngDoCheck() {
      console.log("ngdocheck is called")
  }
  
}
