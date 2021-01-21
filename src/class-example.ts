export class customArray<T> {
    private array: T[] = [];

    getItems(array: T[]) {
        return this.array = array;
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
