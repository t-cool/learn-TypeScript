interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

let john: Person = { name: 'John', age: 25 };

console.log(greet(john)); // Output: Hello, my name is John and I am 25 years old.
