import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
  name:string = "John";

  employee = {
    name: 'Michel',
    position: 'Developer'
  }

  price:number = 3000
  quantity:number = 2

  calcuateTotal(){
    return this.price*this.quantity;
  }

  editMode:boolean = false;
}
