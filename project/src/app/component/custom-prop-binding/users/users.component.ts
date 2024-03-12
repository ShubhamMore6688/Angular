import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input()
  emp: User;
}
