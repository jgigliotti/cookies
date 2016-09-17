import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../util/authentication.service'

@Component({
    moduleId: module.id,
    selector: 'order',
    templateUrl: 'order.html',
    providers: [ AuthenticationService ]
})
export class Order implements OnInit {
    constructor(private _authService: AuthenticationService,
                private _router: Router) { }

    ngOnInit() {
        if(!this._authService.isAUserAuthenticated()) {
            this._router.navigate(['']);
        }
     }
}