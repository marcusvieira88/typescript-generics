// Duplicate code: for number array type
export function removeLastNumber(array: number[]): number[] {
    console.log(array.pop());
    return array;
}

// Duplicate code: for string array type
export function removeLastString(array: string[]): string[] {
    console.log(array.pop());
    return array;
}

// Option to avoid code duplication: lost the type-checking (Runtime errors)
export function removeLastItem(array: any): any {
    console.log(array.pop());
    return array;
}

// dynamic and reusable code
export function removeLastArrayItem<T>(array: T[]): T[] {
    console.log(array.pop());
    return array;
}