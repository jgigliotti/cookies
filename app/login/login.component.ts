import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../util/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html',
    providers: [ AuthenticationService ]
})
export class Login implements OnInit {
    @Output() private errorMessage: string;
    private username: string;
    private password: string;

    constructor(private _authService: AuthenticationService,
                private _router: Router) { }

    ngOnInit() { 
        if(this._authService.isAUserAuthenticated()) {
            this._router.navigate(['order']);
        }
    }

    login(): void {
        if(this._authService.authenticateUser(this.username, this.password)) {
            this._router.navigate(['order']);
        }
    }
}