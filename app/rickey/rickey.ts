import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, Route, CanDeactivate} from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
    selector: 'rickey',
    template: `
<h1>Rickey Cabral</h1>

<router-outlet></router-outlet>

`
})

export class RickeyComponent implements OnDestroy {

    ngOnDestroy() {
        
    }


}