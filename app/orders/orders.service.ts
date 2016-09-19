import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthenticationService } from '../util/authentication.service';
import { CookieOrder } from '../util/util.service';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class OrdersService {
    constructor(private _authService: AuthenticationService, private _http: Http) { }

    getOrders() {
        return this._http.get('./app/util/orders.json')
        .map((response: Response) => response.json())
        .catch(this.error);
    }

    getTypes() {
        return this._http.get('./app/util/types.json')
        .map((response: Response) => response.json().types)
        .catch(this.error);
    }
    
    private error(error: any) {
        console.log(error);
        return Observable.throw(error);
    }
}