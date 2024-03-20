import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-initialization',
  templateUrl: './component-initialization.component.html',
  styleUrls: ['./component-initialization.component.scss']
})
export class ComponentInitializationComponent {
  title:string = 'title'
  //when the constructor is called by that time none of its input properties are updated and available to use
  // @Input() message: string = 'hello'
  // constructor(){
  //   console.log("logs from app-component-initialization")
  //   console.log(this.message)
  //   console.log(this.title)
  // }
  value: string = '';
  onClick(inputEl: HTMLInputElement){
    this.value = inputEl.value;
  }
}
