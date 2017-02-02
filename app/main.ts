import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {WizardTypeComponent} from "./wizard/wizardType.component";
import {WizardComponent} from "./wizard/wizard.component";
import {WizardInfoComponent} from "./wizard/wizardInfo.component";
import {WizardConfirmationComponent} from "./wizard/wizardConfirmation.component";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FormsModule} from "@angular/forms";
import {UserWizardsService} from "./services/userWizards.service";
import {CanDeactivateWizard} from "./wizard/canDeactivateWizard";
import {AppComponent} from "./app.component";
import {RickeyComponent} from "./rickey/rickey";


//Route
import { LoggedInGuard } from "./logged-in.guard";
import { UserService } from "./services/user.service";

import { HttpModule } from '@angular/http';

//Login
import { LoginComponent } from "./login/login.component";

const appRoutes: Route[] = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'login', component: LoginComponent },
    {path: 'home', component: HomeComponent},
    {
        path: 'wizard',
        component: WizardComponent,
        canDeactivate: [CanDeactivateWizard],
        children: [
            {path: '',  redirectTo: 'type'},
            {path: 'type', component: WizardTypeComponent},
            {path: 'info', component: WizardInfoComponent},
            {path: 'confirmation', component: WizardConfirmationComponent}
        ]
    },
    {path: 'rickey', component: RickeyComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule
    ],
    //declarations are to make directives (including components and pipes) from the current module available to other directives in the current module. 
    //Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.
    declarations: [AppComponent, HomeComponent,LoginComponent, WizardComponent, WizardTypeComponent, WizardInfoComponent, WizardConfirmationComponent,RickeyComponent],
    //providers are to make services and values known to DI. 
    //They are added to the root scope and they are injected to other services or directives that have them as dependency.
    providers: [ UserWizardsService, CanDeactivateWizard,LoggedInGuard, UserService],
    bootstrap: [AppComponent]
})
class AppModule { }


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);