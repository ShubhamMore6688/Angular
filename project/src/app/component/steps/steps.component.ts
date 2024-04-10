import { Component } from "@angular/core";


@Component({
    selector: 'app-steps',
    // template: '<div>this is div</div>' //this is inline html
    templateUrl: './steps.component.html',
    // styles: ['.head {color: orange}'] //this inline css
    styleUrls: ['./steps.component.scss']
})

export class StepsComponent{

    clients = [
        {alt: 'client1', logo: '../../../assets/images/client1.png'},
        {alt: 'client2', logo: '../../../assets/images/client2.png'},
        {alt: 'client3', logo: '../../../assets/images/client3.png'},
        {alt: 'client4', logo: '../../../assets/images/client4.png'},
        {alt: 'client5', logo: '../../../assets/images/client5.png'},

    ]
}