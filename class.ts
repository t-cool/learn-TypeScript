class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function greet(person: Person) {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

let bob = new Person('John', 25);

console.log(greet(bob)); // Output: Hello, my name is John and I am 25 years old.
