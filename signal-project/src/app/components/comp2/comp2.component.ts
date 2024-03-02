import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  qty = signal(0)

  onDecrement(){
    this.qty.update((e)=> e-1);
  }

  onIncrement(){
    this.qty.update((e)=> e+1);
  }

  sideEffect = effect(()=> `qty is ${this.qty()}`)
}
