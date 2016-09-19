export class User {
    constructor(public username: string, public password: string) {}
}

export class CookieOrder {
    constructor(public name: string = "", 
                public type: string = "",
                public rush: boolean = false,
                public specialInstructions: string = "",
    ) { }
}

export const users = [ new User('cookie', 'monster') ];