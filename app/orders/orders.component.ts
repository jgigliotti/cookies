import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../util/authentication.service';
import { CookieOrder } from '../util/util.service';

import { OrdersService } from './orders.service';

@Component({
    moduleId: module.id,
    selector: 'orders',
    styleUrls: ['orders.css'],
    templateUrl: 'orders.html'
})
export class Orders implements OnInit {
    private orders: CookieOrder[] = [];

    constructor(private _authService: AuthenticationService,
                private _router: Router) { }

    ngOnInit() {
        if(!this._authService.authenticatedUser()) {
            this._router.navigate(['']);
        }       
     }   
}