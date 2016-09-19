import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './util/authentication.service';
import { Login } from './login/login.component';

@Component({
    moduleId: module.id,
    selector: 'cookies-app',
    styleUrls: ['app.css'],
    templateUrl: 'app.html',
    providers: [ AuthenticationService ]
})

export class AppComponent { 
    constructor(private _authService: AuthenticationService,
                private _router: Router) { }

    logout() {
         this._authService.deauthenticateUser();
         this._router.navigate(['']);
     }
}
