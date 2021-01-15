// No type-checking
export function arrayAnyType(array: any): any {
    array.pop();
    console.log(`arrayAnyType value: ${array} length: ${array.length}`);
    return array;
}

// Most flexible and scalable approach
export function arrayGenerics<T>(array: T[]): T[] {
    array.pop();
    console.log(`arrayGenerics value: ${array} length: ${array.length}`);
    return array;
}