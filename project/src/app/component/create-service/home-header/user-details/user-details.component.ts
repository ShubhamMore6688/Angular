import { Component } from '@angular/core';

import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  // providers: [UserService]
 
  
})
export class UserDetailsComponent {

  constructor(private usrservice: UserService){

  }

  name: string = ''
  gender: string = 'male'
  subType: string = 'monthly'
  status: string = 'inactive'

  onSubmit(){
    this.usrservice.createNewUser(this.name, this.gender, this.subType, this.status)
  }
  
  
  
  
}
