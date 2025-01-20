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

/* export class Hero {
    public person: Person;
    constructor(public alterEgo: string, public age:number, public realName:string) {
       this.person = new Person(realName, new Address('123 main st', 'NY', 'NY'));
    }
} */

export class Hero {
    constructor(
        public alterEgo: string,
        public age:number, 
        public realName:string,
        public person: Person) {
       this.alterEgo = alterEgo;
       this.age = age;    
       this.realName = realName;
       this.person = person;
    }
}

const person = new Person('Peter Parker', new Address('123 main st', 'NY', 'NY'));
const ironMan = new Hero('Ironman',45, 'Tony Stark', person);

console.log(ironMan);
console.log(person);