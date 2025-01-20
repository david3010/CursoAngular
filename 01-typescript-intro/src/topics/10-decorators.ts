function ClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}

@ClassDecorator
export class SuperClass {
    public myProperty: string = 'abc123';

    print() {
        console.log('Hello from SuperClass');
    }
}

console.log(SuperClass)

const myClass = new SuperClass();
console.log(myClass);