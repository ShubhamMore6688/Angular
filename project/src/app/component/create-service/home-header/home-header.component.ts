import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  // when the instance of the class is give in the parent component the we don't need to specify in the child component
  // providers: [SubscribeService]
})
export class HomeHeaderComponent {

}
