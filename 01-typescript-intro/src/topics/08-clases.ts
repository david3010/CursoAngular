export class Person {
    // public name: string;
    // public address: Address;

    constructor(public name: string, private address: Address) {}
    //     this.name = name;
    //     this.address = address;
    // }
}

class Address {
    public street: string;
    public city: string;
    public state: string;

    constructor(street: string, city: string, state: string) {
        this.street = street;
        this.city = city;
        this.state = state;
    }
}