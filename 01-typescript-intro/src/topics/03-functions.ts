function addNumbers(a: number, b: number): number {
    return a + b;
}

const suma = (a: number, b: number): string => `${a + b}`;

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return secondNumber ? firstNumber * secondNumber * base : firstNumber * base;
}


let result = addNumbers(1, 2); // 3
let result2 = suma(1, 2); // 3
let result3 = multiply(5); // 100
let result4 = multiply(5, 10, 2); // 100
let result5 = multiply(5, 10, 100); // 100

console.log({ result, result2, result3, result4, result5 });

interface Character {
    name: string;
    life: number;
    showLife: () => string;
}

const heal = (character: Character, life: number): void => {
    character.life += life;
}

const strider: Character = {
    name: 'Strider',
    life: 100,
    showLife() {
        return `${this.name} has ${this.life} of life`;
    }
}

heal(strider, 250);

console.log(strider.showLife());


