export class customArray<T> {
    private array: T[] = [];

    getItems(arr: T[]) {
        return this.array = arr;
    }

    addItem(item: T) {
        this.array.push(item);
    }

    removeItem(item: T) {
        let index = this.array.indexOf(item);
        if (index > -1)
            this.array.splice(index, 1);
    }
}
