import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent {
  @Input()
  shoes: {
    id: number,
    name: string,
    brand: string,
    gender: string,
    category: string,
    price: number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL:string,
    slug: string
  }
}
