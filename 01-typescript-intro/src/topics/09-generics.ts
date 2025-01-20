import { Person } from "./08-clases";

export function whatsMyType(argument: any): string {
    return typeof argument;
}

console.log(whatsMyType('Hello'));

console.log(whatsMyType(123));

console.log(whatsMyType(true));

console.log(whatsMyType({ name: 'John Doe', age: 30 }));

console.log(whatsMyType([1, 2, 3]));

console.log(whatsMyType(null));

console.log(whatsMyType(undefined));

export function whatsMyTypeGenerics<T>(argument: T): T {
    return argument;
}

console.log(whatsMyTypeGenerics<string>('Hello World').split(' '));
console.log(whatsMyTypeGenerics<number>(123).toFixed(2));
console.log(whatsMyTypeGenerics<boolean>(true).valueOf());
console.log(whatsMyTypeGenerics<object>({ name: 'John Doe', age: 30 }));

