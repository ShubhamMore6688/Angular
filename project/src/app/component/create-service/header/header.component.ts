import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers give the instance of SubscribeService class
  // this instance is different from other instance of SubscribeService class
  // providers: [SubscribeService]
})
export class HeaderComponent {


  //dependency injection is technique using which a class receives its dependencies from an external source
  // rather than creating them itself

  // how to provide dependency
  constructor(private subservice: SubscribeService){

  }
  onClicked(){
    // let subservice = new SubscribeService();
    this.subservice.onSubscribeClicked();
  }
}
