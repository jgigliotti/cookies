import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from '../util/authentication.service';
import { CookieOrder } from '../util/util.service';

import { Order } from '../order/order.component';
import { OrdersService } from './orders.service';

@Component({
    moduleId: module.id,
    selector: 'orders',
    styleUrls: ['orders.css'],
    templateUrl: 'orders.html',
    providers: [ OrdersService ]
})
export class Orders implements OnInit {
    newOrder: CookieOrder;
    orders: CookieOrder[] = [];
    cookieTypes: string[] = [];

    constructor(private _authService: AuthenticationService,
                private _router: Router, private _ordersService: OrdersService) { }

    ngOnInit() {
        if(!this._authService.authenticatedUser()) {
            this._router.navigate(['']);
            return;
        }

        this.newOrder = new CookieOrder();

        this._ordersService.getOrders().subscribe((orders) => this.orders = orders);
        this._ordersService.getTypes().subscribe((types) => this.cookieTypes = types);
     }

     canAdd() {
         return this.newOrder.name.length === 0 || this.newOrder.type.length === 0;
     }

     addOrder() {
         this.orders.push(this.newOrder);
         this.newOrder = new CookieOrder();
     }

     delOrder(delOrder: CookieOrder) {
        this.orders = this.orders.filter((order) => delOrder.name !== order.name );   
     }
}