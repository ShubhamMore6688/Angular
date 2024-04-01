import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {
  title = 'angular-observables';

  data: any[] = [];

  myObservable = new Observable((observer)=>{
    observer.next([1,2,3,4,5,6]);
  });

  GetAsyncData(){
    this.myObservable.subscribe((val: any) => {
      this.data = val;
    })
  }

}


