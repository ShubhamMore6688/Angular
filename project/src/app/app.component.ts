import { Component } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //when we provide the instance of the SubscribeService in app component the we can use the same instance in whole project
  // providers: [SubscribeService]
})
export class AppComponent {
  constructor(){
    console.log("log from app component")
  }
  title = 'project1-angular';
}
