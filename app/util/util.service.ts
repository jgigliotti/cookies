export class User {
    constructor(public username: string, public password: string) {}
}

export const users = [ new User('justin', 'password') ];