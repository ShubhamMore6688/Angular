import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngonchange',
  templateUrl: './ngonchange.component.html',
  styleUrls: ['./ngonchange.component.scss']
})
export class NgonchangeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {
  // for this ngonchange do not run again because this message storing the reference of the array
  // so at each append we are not changing the reference
  // @Input() message: string[];
  @Input() message: string;
  @ContentChild('para') Para: ElementRef
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
      console.log("projected content in ngdocheck", this.Para)
  }
  
  //ngaftercontentinit lifecycle hook is called after the components projected content has been fully initialized
  //angular update the properties decorated with @ContentChild & @ContentChildren decorator just before this hook is raised
  //this hook get called only once during the first change detection cycle. after that if projected content chages,this hook will not get called

  
  ngAfterContentInit() {
      console.log("ngaftercontentinit is called")
      console.log("projected content in ngaftercontentinit", this.Para.nativeElement)
  }

  //ngaftercontentchecked lifecycle hook is called during every change detection cycle after angular has 
  // finished initializing and checking projected content
  // this hook is called after every change in the projected content
  //angular update the properties decorated with @ContentChild & @ContentChildren decorator just before this hook is raised
  //ngaftercontentinit is called after projected content is initialized
  //ngaftercontentchecked is called whenever projected content initailized, checked, updated

  //ngaftercontentinit and ngaftercontentchecked are component only hooks they are not available for directives

  ngAfterContentChecked() {
      console.log("ngaftercontentchecked is called")
  }
}
