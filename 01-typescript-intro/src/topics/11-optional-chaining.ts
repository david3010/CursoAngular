export interface Passenger {
    name: string;
    children?: string[];
}

const passenger: Passenger = {
    name: 'John'
};

const passenger2: Passenger = {
    name: 'John',
    children: ['John Jr', 'Jane']
};

let pringChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0;

    console.log(howManyChildren);
}

let returnChildren = (passenger: Passenger) => {

    if (!passenger.children) return 0;

    return passenger.children!.length;
}

returnChildren(passenger);
returnChildren(passenger2);

pringChildren(passenger);
pringChildren(passenger2);