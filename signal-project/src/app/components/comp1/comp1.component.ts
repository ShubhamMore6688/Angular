import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  // firstName = 'anup'
  // lastName = 'sharma'

  // to convert this in to signals

  firstName = signal('anum')
  lastName = signal('sharma')

  // fullName = this.firstName + ' ' + this.lastName
  // to compute fullname

  // computed is used to derive the values from other signals
  fullName = computed(()=> this.firstName() +' '+ this.lastName())

  changeFirstName(fname: any){
    // this.firstName = fname;
    //to set the value of signals
    this.firstName.set(fname);
  }

  changeLastName(lname: any){
    // this.lastName = lname;
    this.lastName.set(lname);
  }

  

}
