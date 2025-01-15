
let skills: string[] = ['bash', 'counter', 'heal'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}

let strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counter']
}


strider.homeTown = 'Rivendell';


console.table(strider);

export {}