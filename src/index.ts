import { customArray } from "./class-example";
import { arrayAnyType, arrayGenerics } from "./array-example";
import { testGenerics, testTyped, testAnyType, Dog, Bird, Ghost } from "./inheritance-example";

// GENERICS IN ARRAYS
arrayAnyType(["AAA", "BBB", "CCC"])
// arrayAnyType(19) // runtime error

arrayGenerics(["GGG", "HHH", "III"])
arrayGenerics<Number>([12, 13, 14])
// arrayGenerics(19) //compile error
// arrayGenerics("It is not an array") //compile error

// GENERICS IN CLASSES
let numberObject = new customArray<number>();
numberObject.addItem(999);
console.log(numberObject);

let stringObject = new customArray<string>();
stringObject.addItem('Test Generics');
console.log(stringObject);

// GENERICS IN INHERITANCE

testAnyType(new Bird())
// testAnyType("I'm not an animal") // runtime error

testTyped(new Dog())
// testTyped(new Ghost()) // compile error

testGenerics(new Dog())
testGenerics(new Bird())
// testGenerics(new Ghost()) // compile error