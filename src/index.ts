import { customArray } from "./class-example";
import { arrayAnyType, arrayGenerics } from "./array-example";
import { testGenerics, testTyped, testAnyType, Dog, Bird } from "./inheritance-example";

// GENERICS IN ARRAYS
arrayAnyType(["AAA", "BBB", "CCC"])
// arrayAnyType(19) // runtime error

arrayGenerics(["GGG", "HHH", "III"])
arrayGenerics<Number>([12, 13, 14])
// arrayGenerics("It is not an array") //compile error

// GENERICS IN CLASSES
let numberObject = new customArray<number>();
numberObject.addItem(999);
console.log(numberObject);

let stringObject = new customArray<string>();
stringObject.addItem('Test Generics');
console.log(stringObject);

// GENERICS IN INHERITANCE
testGenerics(new Dog())
testGenerics(new Bird())

testTyped(new Dog())
testAnyType(new Bird())
// testAnyType("I'm not an animal") // runtime error