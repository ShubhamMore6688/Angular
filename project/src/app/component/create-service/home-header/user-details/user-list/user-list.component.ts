import { Component } from '@angular/core';
import { Newuser } from 'src/app/Models/Newuser';

import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  // providers: [UserService]
  
})
export class UserListComponent {
  constructor(private userservice: UserService){

  }

  userlist = this.userservice.GetAllUsers()

  onUserSelect(user: Newuser){
    console.log(user )
  }
  
}
