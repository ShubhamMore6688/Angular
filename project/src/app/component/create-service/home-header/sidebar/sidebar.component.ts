import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // providers: [SubscribeService]
})
export class SidebarComponent {
  constructor(private subservice: SubscribeService){

  }
  onClicked(){
    // let subservice = new SubscribeService();
    this.subservice.onSubscribeClicked();
  }
}
