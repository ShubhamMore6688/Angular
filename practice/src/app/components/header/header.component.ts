import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    app_name: string = "Blogify"

    tabs:any = ["Home", "About", "Contact", "Create Account"]

}
