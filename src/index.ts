import { customArray } from "./class-example";
import { removeLastNumber, removeLastString, removeLastItem, removeLastArrayItem } from "./array-example";
import { testGenerics, testTyped, testAnyType, Dog, Bird, Ghost } from "./inheritance-example";

// GENERICS IN ARRAYS
removeLastNumber([10, 20, 30])
removeLastString(["AAA", "BBB", "CCC"])
// removeLastItem(19) // runtime error

removeLastArrayItem(["GGG", "HHH", "III"])
removeLastArrayItem<Number>([12, 13, 14])
// removeLastArrayItem(19) //compile error (type-checking)

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