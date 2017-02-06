import {Component} from "@angular/core";
import { UserService } from "./services/user.service";

@Component({
    selector: 'wizard-app',
    template: `
<div class="navbar navbar-default nav-links navbar-fixed-top">
    <div class="container">
        <a class="mini-navbar navbar-brand" routerLink="home">Wizard Demo</a>
        <ul class="nav navbar-nav">
            <li [routerLinkActive]="['active']"><a *ngIf="!loginInfo.isLoggedIn()" routerLink="login">Login in</a></li>
            <li [routerLinkActive]="['active']"><a *ngIf="loginInfo.isLoggedIn()" routerLink="login">Login out</a></li>
            <li [routerLinkActive]="['active']"><a routerLink="home">Home</a></li>
            <li [routerLinkActive]="['active']"><a routerLink="wizard">Wizard</a></li>
            <li [routerLinkActive]="['active']"><a routerLink="rickey">Rickey</a></li>
            

               

        </ul>
    </div>
</div>
<div class="container" style="margin-top:50px;">
    <router-outlet></router-outlet>
</div>
`
})
export class AppComponent { 
    constructor(private loginInfo : UserService){}


}