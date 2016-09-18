import { Injectable } from '@angular/core';
import { users } from './util.service';

@Injectable()
export class AuthenticationService {

    constructor() { }

    isAUserAuthenticated(): string | null {
        return localStorage.getItem('loggedInUser');
    }

    authenticateUser(username: string, password: string): boolean {
        let foundUser = users.find(user => user.username === username);
        if(foundUser && foundUser.password === password) {
            localStorage.setItem('loggedInUser', username);
            return true;
        }
        return false;
    }

    deauthenticateUser(): void {
        localStorage.removeItem('loggedInUser');
    }
}