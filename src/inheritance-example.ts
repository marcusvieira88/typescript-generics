export class Ghost {
    scare() {
        console.log(`boooooo`)
    }
}
class Animal {
    eat() {
        console.log(`eating`)
    }
}
export class Dog extends Animal {
    bark() {
        console.log(`barking`)
    }
}
export class Bird extends Animal {
    fly() {
        console.log(`flying`)
    }
}

// There is type-checking but it is not scalable (if needed)
export function testTyped(animal: Dog | Bird) {
    animal.eat();
    console.log(`testTyped ${animal.constructor.name}`)
}

// No type-checking
export function testAnyType(animal: any) {
    animal.eat();
    console.log(`testAnyType ${animal.constructor.name}`)
}

// Most flexible and scalable approach
export function testGenerics<Y extends Animal>(animal: Y) {
    animal.eat();
    console.log(`testGenerics ${animal.constructor.name}`)
}