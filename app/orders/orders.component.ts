import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../util/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'orders',
    styleUrls: ['orders.css'],
    templateUrl: 'orders.html',
    providers: [ AuthenticationService ]
})
export class Orders implements OnInit {
    constructor(private _authService: AuthenticationService,
                private _router: Router) { }

    ngOnInit() {
        if(!this._authService.authenticatedUser()) {
            this._router.navigate(['']);
        }
     }

     logout() {
         this._authService.deauthenticateUser();
         this._router.navigate(['']);
     }
}